import React from 'react';
import PropTypes from 'prop-types';

import { PolyData as VtkItem } from '../AsyncReactVTK';

/**
 * PolyData is exposing a vtkPolyData to a downstream filter
 * It takes the following set of properties:
 *   - points: [x, y, z, x, y, z, ...],
 *   - verts: [cellSize, pointId0, pointId1, ..., cellSize, pointId0, ...]
 *   - lines: [cellSize, pointId0, pointId1, ..., cellSize, pointId0, ...]
 *   - polys: [cellSize, pointId0, pointId1, ..., cellSize, pointId0, ...]
 *   - strips: [cellSize, pointId0, pointId1, ..., cellSize, pointId0, ...]
 * Cell connectivity helper property:
 *   - connectivity: 'manual', // [manual, points, triangles, strips]
 */
export default function PolyData(props) {
  return <React.Suspense fallback={null}><VtkItem {...props} /></React.Suspense>;
};

PolyData.defaultProps = {
  port: 0,
  points: [],
  connectivity: 'manual',
};

PolyData.propTypes = {
  /**
   * The ID used to identify this component.
   */
  id: PropTypes.string,

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

  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
