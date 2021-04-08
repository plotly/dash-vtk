import React from 'react';
import PropTypes from 'prop-types';

// import { Calculator as VtkItem } from 'react-vtk-js';
import VtkItem from '../utils/Calculator';


/**
 * Calculator is exposing a source or filter to a downstream filter
 * It takes the following set of properties:
 *   - name: 'scalars'    // name of the generated field
 *   - location: 'POINT'  // POINT/CELL
 *   - arrays: []         // Name of array to have access in formula
 *   - formula: fn
 */
export default function Calculator(props) {
  return <React.Suspense><VtkItem {...props} /></React.Suspense>;
};

Calculator.defaultProps = {
  port: 0,
  name: 'scalars',
  location: 'POINT',
  arrays: [],
  formula: (xyz) => xyz[0],
};

Calculator.propTypes = {
  /**
   * The ID used to identify this component.
   */
  id: PropTypes.string,

  /**
   * downstream connection port
   */
  port: PropTypes.number,

  /**
   * Field name
   */
  name: PropTypes.string,

  /**
   * Field location [POINT, CELL, COORDINATE, SCALARS, ]
   */
  location: PropTypes.string,

  /**
   * List of fields you want available for your formula
   */
  arrays: PropTypes.arrayOf(PropTypes.string),

  /**
   * Field formula
   */
  formula: PropTypes.func,

  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
