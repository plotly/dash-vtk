import React, { Component } from 'react';
import PropTypes from 'prop-types';

import vtkPolyData from 'vtk.js/Sources/Common/DataModel/PolyData';

/**
 * VtkPolyDataSource is exposing a polydata to a downstream filter or representation
 * It takes the following set of properties:
 *   - points: [x, y, z, x, y, z, ...],
 *   - verts: [cellSize, pointId0, pointId1, ..., cellSize, pointId0, ...]
 *   - lines: [cellSize, pointId0, pointId1, ..., cellSize, pointId0, ...]
 *   - polys: [cellSize, pointId0, pointId1, ..., cellSize, pointId0, ...]
 *   - strips: [cellSize, pointId0, pointId1, ..., cellSize, pointId0, ...]
 *   - pointCloud: false/true (if on it will generate verts automatically)
 * It provides the following properties to its children:
 *   - pass along: 'view', 'representation`, `setProps`
 *   - `dataset` == `this.dataset`
 */
export default class VtkPolyDataSource extends Component {
  constructor(props) {
    super(props);

    // Create vtk.js polydata
    this.polydata = vtkPolyData.newInstance();
  }

  render() {
    console.log('VtkPolyDataSource', this.props);
    const { id, setProps, children, view, representation } = this.props;
    const addOnProps = {
      dataset: this.polydata,
      representation,
      view,
      setProps,
    };
    const childrenWithViewProp = React.Children.map(children, child => React.cloneElement(child, addOnProps));
    return (
      <div id={id}>
        {childrenWithViewProp}
      </div>
    );
  }

  componentDidMount() {
    const { downstream, port } = this.props;
    this.update(this.props);
    downstream.setInputData(this.polydata, port);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    this.update(this.props, prevProps);
  }

  componentWillUnmount() {
    this.polydata.delete();
    this.polydata = null;
  }

  update(props, previous) {
    const { pointCloud, points, verts, lines, polys, strips } = props;
    let changeDetected = false;
    let pointChanged = false;
    if (points && (!previous || points !== previous.points)) {
      this.polydata.getPoints().setData(Float32Array.from(points), 3);
      pointChanged = true;
      changeDetected = true;
    }

    if (verts && (!previous || verts !== previous.verts)) {
      this.polydata.getVerts().setData(Uint16Array.from(verts));
      changeDetected = true;
    }

    if (lines && (!previous || lines !== previous.lines)) {
      this.polydata.getLines().setData(Uint16Array.from(lines));
      changeDetected = true;
    }

    if (polys && (!previous || polys !== previous.polys)) {
      this.polydata.getPolys().setData(Uint16Array.from(polys));
      changeDetected = true;
    }

    if (strips && (!previous || strips !== previous.strips)) {
      this.polydata.getStrips().setData(Uint16Array.from(strips));
      changeDetected = true;
    }

    if (pointCloud && (pointChanged || !previous || pointCloud !== previous.pointCloud)) {
      const nbPoints = points.length / 3;
      const values = new Uint16Array(nbPoints + 1);
      values[0] = nbPoints;
      for (let i = 0; i < nbPoints; i++) {
        values[i + 1] = i;
      }
      this.polydata.getVerts().setData(values);
      changeDetected = true;
    }

    if (changeDetected) {
      this.polydata.modified();
    }
  }
}

VtkPolyDataSource.defaultProps = {
  port: 0,
  points: [],
  pointCloud: false,
};

VtkPolyDataSource.propTypes = {
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
   * downstream connection port
   */
  port: PropTypes.number,

  /**
   * xyz coordinates
   */
  points: PropTypes.arrayOf(PropTypes.number),

  /**
   * verts cells
   */
  verts: PropTypes.arrayOf(PropTypes.number),

  /**
   * lines cells
   */
  lines: PropTypes.arrayOf(PropTypes.number),

  /**
   * polys cells
   */
  polys: PropTypes.arrayOf(PropTypes.number),

  /**
   * strips cells
   */
  strips: PropTypes.arrayOf(PropTypes.number),

  /**
   * Is it point cloud
   */
  pointCloud: PropTypes.bool,

  /**
   * List of representation to show
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  /**
   * Passed by parent
   */
  view: PropTypes.object,
  /**
   * Passed by parent
   */
  representation: PropTypes.object,
};
