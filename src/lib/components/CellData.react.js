import React from 'react';
import PropTypes from 'prop-types';

import { CellData as VtkItem } from 'react-vtk-js';

/**
 * CellData is exposing a vtkCellData to a downstream element
 */
export default function CellData(props) {
  return <VtkItem {...props} />;
};

CellData.defaultProps = {};

CellData.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
