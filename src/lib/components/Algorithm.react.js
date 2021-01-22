import React from 'react';
import PropTypes from 'prop-types';

import { Algorithm as VtkItem } from 'react-vtk-js';

/**
 * Algorithm is exposing a source or filter to a downstream filter
 * It takes the following set of properties:
 *   - vtkClass: vtkClassName
 *   - state: {}
 */
export default function Algorithm(props) {
  return <VtkItem {...props} />;
};

Algorithm.defaultProps = {
  port: 0,
  vtkClass: 'vtkConeSource',
  state: {},
};

Algorithm.propTypes = {
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
   * set of property values for vtkClass
   */
  state: PropTypes.object,

  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
