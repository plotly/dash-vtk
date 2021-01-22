import React from 'react';
import PropTypes from 'prop-types';

import { PointData as VtkItem } from 'react-vtk-js';

/**
 * PointData is exposing a vtkPointData to a downstream element
 */
export default function PointData(props) {
  return <VtkItem {...props} />;
};

PointData.defaultProps = {};

PointData.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
