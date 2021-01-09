import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { RepresentationContext, DownstreamContext, DataSetContext } from './VtkView.react';

import vtkPolyData from 'vtk.js/Sources/Common/DataModel/PolyData';

/**
 * VtkPolyDataSource is exposing a polydata to a downstream filter
 * It takes the following set of properties:
 *   - points: [x, y, z, x, y, z, ...],
 *   - connectivity: 'manual', // [manual, points, triangles, strips]
 *   - verts: [cellSize, pointId0, pointId1, ..., cellSize, pointId0, ...]
 *   - lines: [cellSize, pointId0, pointId1, ..., cellSize, pointId0, ...]
 *   - polys: [cellSize, pointId0, pointId1, ..., cellSize, pointId0, ...]
 *   - strips: [cellSize, pointId0, pointId1, ..., cellSize, pointId0, ...]
 */
export default class VtkPolyDataSource extends Component {
  constructor(props) {
    super(props);

    // Create vtk.js polydata
    this.polydata = vtkPolyData.newInstance();
  }

  render() {
    return (
      <RepresentationContext.Consumer>
        {(representation) => (
          <DownstreamContext.Consumer>
            {(downstream) => {
              this.representation = representation;
              if (!this.downstream) {
                this.downstream = downstream;
              }
              return (
                <DataSetContext.Provider value={this.polydata}>
                  <div id={this.props.id}>
                    {this.props.children}
                  </div>
                </DataSetContext.Provider>
              );
            }}
          </DownstreamContext.Consumer>
        )}
      </RepresentationContext.Consumer>
    );
  }

  componentDidMount() {
    this.update(this.props);
    this.downstream.setInputData(this.polydata, this.props.port);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    this.update(this.props, prevProps);
  }

  componentWillUnmount() {
    this.polydata.delete();
    this.polydata = null;
  }

  update(props, previous) {
    const { connectivity, points, verts, lines, polys, strips } = props;
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

    if (connectivity && (connectivity || !previous || connectivity !== previous.connectivity)) {
      const nbPoints = points.length / 3;
      switch (connectivity) {
        case 'points':
          {
            const values = new Uint16Array(nbPoints + 1);
            values[0] = nbPoints;
            for (let i = 0; i < nbPoints; i++) {
              values[i + 1] = i;
            }
            this.polydata.getVerts().setData(values);
            changeDetected = true;
          }
          break;
        case 'triangles':
          {
            const values = new Uint16Array(nbPoints + (nbPoints / 3));
            let offset = 0;
            for (let i = 0; i < nbPoints; i+=3) {
              values[offset++] = 3;
              values[offset++] = i + 0;
              values[offset++] = i + 1;
              values[offset++] = i + 2;
            }
            this.polydata.getPolys().setData(values);
            changeDetected = true;
          }
          break;
        case 'strips':
          {
            const values = new Uint16Array(nbPoints + 1);
            values[0] = nbPoints;
            for (let i = 0; i < nbPoints; i++) {
              values[i + 1] = i;
            }
            this.polydata.getStrips().setData(values);
            changeDetected = true;
          }
          break;
        default:
          // do nothing for manual or anything else...
      }
    }

    if (changeDetected) {
      this.polydata.modified();
    }

    // // Force prop update now that the downstream has data
    // if (this.downstream === this.representation.mapper) {
    //   this.representation.update(this.representation.props);
    // }
  }
}

VtkPolyDataSource.defaultProps = {
  port: 0,
  points: [],
  connectivity: 'manual',
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
   * Type of connectivity `manual` or implicit such as `points`, `triangles`, `strips`
   */
  connectivity: PropTypes.string,

  /**
   * List of representation to show
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
};
