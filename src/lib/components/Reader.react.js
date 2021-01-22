import React from 'react';
import PropTypes from 'prop-types';

import { Reader as VtkItem } from 'react-vtk-js';

/**
 * Reader is exposing a reader to a downstream filter
 * It takes the following set of properties:
 *   - vtkClass: vtk.js reader class name
 *   - url: string
 *   - parseAsText: string
 *   - parseAsArrayBuffer: base64String
 */
export default function Reader(props) {
  return <VtkItem {...props} />;
};

Reader.defaultProps = {
  port: 0,
  vtkClass: '',
  renderOnUpdate: true,
  resetCameraOnUpdate: true,
};

Reader.propTypes = {
  /**
   * The ID used to identify this component.
   */
  id: PropTypes.string,

  /**
   * downstream connection port
   */
  port: PropTypes.number,

  /**
   * vtkClass name
   */
  vtkClass: PropTypes.string,

  /**
   * set of url to fetch data from
   */
  url: PropTypes.string,

  /**
   * set text data to process
   */
  parseAsText: PropTypes.string,

  /**
   * set binary data to process from base64 string
   */
  parseAsArrayBuffer: PropTypes.string,

  /**
   * Automatically render on data loaded
   */
  renderOnUpdate: PropTypes.bool,

  /**
   * Automatically reset camera on data loaded
   */
  resetCameraOnUpdate: PropTypes.bool,

  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
