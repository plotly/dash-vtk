import React from 'react';
import PropTypes from 'prop-types';

import { CellData as VtkItem } from '../AsyncReactVTK';

/**
 * CellData is exposing a vtkCellData to a downstream element
 */
export default function CellData(props) {
  return <React.Suspense fallback={null}><VtkItem {...props} /></React.Suspense>;
};

CellData.defaultProps = {};

CellData.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
