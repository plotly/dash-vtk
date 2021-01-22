import React from 'react';
import PropTypes from 'prop-types';

import { ImageData as VtkItem } from 'react-vtk-js';

/**
 * ImageData is exposing a vtkImageData to a downstream filter
 * It takes the following set of properties:
 *   - dimensions: [nx, ny, nz],
 *   - origin: [0, 0, 0]
 *   - spacing: [1, 1, 1]
 */
export default function ImageData(props) {
  return <VtkItem {...props} />;
};

ImageData.defaultProps = {
  port: 0,
  dimensions: [1, 1, 1],
  spacing: [1, 1, 1],
  origin: [0, 0, 0],
};

ImageData.propTypes = {
  /**
   * The ID used to identify this component.
   */
  id: PropTypes.string,

  /**
   * downstream connection port
   */
  port: PropTypes.number,

  /**
   * Number of points along x, y, z
   */
  dimensions: PropTypes.arrayOf(PropTypes.number),

  /**
   * Spacing along x, y, z between points in world coordinates
   */
  spacing: PropTypes.arrayOf(PropTypes.number),

  /**
   * World coordinate of the lower left corner of your vtkImageData (i=0, j=0, k=0).
   */
  origin: PropTypes.arrayOf(PropTypes.number),

  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
