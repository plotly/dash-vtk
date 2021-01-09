import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { VueContext, RepresentationContext, DownstreamContext } from './VtkView.react';

import vtkActor from 'vtk.js/Sources/Rendering/Core/Actor';
import vtkMapper from 'vtk.js/Sources/Rendering/Core/Mapper';

/**
 * VtkGeometryRepresentation is responsible to convert a vtkPolyData into rendering
 * It takes the following set of properties:
 *   - colorBy: ['POINTS', ''],
 *   - pointSize: 1,
 *   - color: [1,1,1],
 */
export default class VtkGeometryRepresentation extends Component {
  constructor(props) {
    super(props);

    // Create vtk.js actor/mapper
    this.actor = vtkActor.newInstance();
    this.mapper = vtkMapper.newInstance();
    this.actor.setMapper(this.mapper);
  }

  render() {
    return (
      <VueContext.Consumer>
        {(view) => {
          if (!this.view) {
            view.renderer.addActor(this.actor);
            this.view = view;
          }
          return (
            <RepresentationContext.Provider value={this}>
              <DownstreamContext.Provider value={this.mapper}>
                <div id={this.props.id}>
                  {this.props.children}
                </div>
              </DownstreamContext.Provider>
            </RepresentationContext.Provider>
          );
        }}
      </VueContext.Consumer>
    );
  }

  componentDidMount() {
    this.update(this.props);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    this.update(this.props, prevProps);
  }

  componentWillUnmount() {
    if (this.view) {
      this.view.renderer.remoteActor(this.actor);
    }

    this.actor.delete();
    this.actor = null;

    this.mapper.delete();
    this.mapper = null;
  }

  update(props, previous) {
    const { pointSize, color, colorBy } = props;
    if (pointSize && (!previous || pointSize !== previous.pointSize)) {
      this.actor.getProperty().setPointSize(pointSize);
    }
    if (color && (!previous || color !== previous.color)) {
      this.actor.getProperty().setColor(color);
    }
    if (colorBy && (!previous || colorBy !== previous.colorBy)) {
      this.setColorBy(...colorBy)
    }
  }

  setColorBy(arrayLocation, arrayName) {
    let colorMode = vtkMapper.ColorMode.DEFAULT;
    let scalarMode = vtkMapper.ScalarMode.DEFAULT;
    const colorByArrayName = arrayName;
    const dataset = this.mapper.getInputData();
    if (!dataset) {
      return;
    }
    const fields = dataset.getReferenceByName(arrayLocation);
    const activeArray = fields && fields.getArray(arrayName);
    const scalarVisibility = !!activeArray;

    if (scalarVisibility) {
      colorMode = vtkMapper.ColorMode.MAP_SCALARS;
      scalarMode =
        arrayLocation === 'pointData'
          ? vtkMapper.ScalarMode.USE_POINT_FIELD_DATA
          : vtkMapper.ScalarMode.USE_CELL_FIELD_DATA;
    }

    // Not all mappers have those fields
    this.mapper.set(
      {
        colorByArrayName,
        colorMode,
        scalarMode,
        scalarVisibility,
      },
      true
    );
  };
}

VtkGeometryRepresentation.defaultProps = {
  colorBy: ['pointData', ''],
  pointSize: 1,
  color: [1, 1, 1],
};

VtkGeometryRepresentation.propTypes = {
  /**
   * The ID used to identify this component in Dash callbacks.
   */
  id: PropTypes.string,

  /**
   * Dash-assigned callback that should be called to report property changes
   * to Dash, to make them available for callbacks.
   */
  setProps: PropTypes.func,

  // -- vtk.js exposed properties

  /**
   * Choose which array to color the output with.
   * - ['pointData', 'temperature']
   * - ['cellData', 'pressure']
   */
  colorBy: PropTypes.arrayOf(PropTypes.string),

  /**
   * pointSize for vertex rendering
   */
  pointSize: PropTypes.number,

  /**
   * When no colorBy array is provided use provided solid color
   */
  color: PropTypes.arrayOf(PropTypes.number),

  /**
   * List of representation to show
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
};
