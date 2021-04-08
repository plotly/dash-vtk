import React from 'react';
import PropTypes from 'prop-types';

// import { FieldData as VtkItem } from 'react-vtk-js';
import VtkItem from '../utils/FieldData';

/**
 * FieldData is exposing a FieldData to a downstream element
 */
export default function FieldData(props) {
  return <React.Suspense><VtkItem {...props} /></React.Suspense>;
};

FieldData.defaultProps = {};

FieldData.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
