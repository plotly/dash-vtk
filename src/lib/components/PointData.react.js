import React from 'react';
import PropTypes from 'prop-types';

import { PointData as VtkItem } from '../AsyncReactVTK';

/**
 * PointData is exposing a vtkPointData to a downstream element
 */
export default function PointData(props) {
  return <React.Suspense fallback={null}><VtkItem {...props} /></React.Suspense>;
};

PointData.defaultProps = {};

PointData.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
