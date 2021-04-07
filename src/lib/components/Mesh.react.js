import React from 'react';
import PropTypes from 'prop-types';

import { PolyData, PointData, CellData, DataArray } from 'react-vtk-js';

/**
 * Mesh is exposing a vtkPolyData to a downstream filter
 * It takes the following set of properties:
 *   - state: { mesh: { ...polydata-props }, field: { ...dataArray } }
 */
export default function Mesh(props) {
  return (
    <PolyData
      id={props.id}
      port={props.port}
      {...props.state.mesh}
    >
        <PointData>
        {props.state.field && props.state.field.location === 'PointData' &&
          <DataArray
            registration="setScalars"
            {...props.state.field}
          />
        }
        {props.state.pointArrays && props.state.pointArrays.map((array) => (<DataArray key={array.name} {...array} />))}
        </PointData>
        <CellData>
        {props.state.field && props.state.field.location === 'CellData' &&
          <DataArray
            registration="setScalars"
            {...props.state.field}
          />
        }
        {props.state.cellArrays && props.state.cellArrays.map((array) => (<DataArray key={array.name} {...array} />))}
        </CellData>
    </PolyData>
  );
};

Mesh.defaultProps = {
  port: 0,
  state: {
    mesh: { points: [] },
  }
};

Mesh.propTypes = {
  /**
   * The ID used to identify this component.
   */
  id: PropTypes.string,

  /**
   * downstream connection port
   */
  port: PropTypes.number,

  /**
   * State of the mesh
   */
  state: PropTypes.object,
};
