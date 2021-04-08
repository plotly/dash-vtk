import React from 'react';
import PropTypes from 'prop-types';

// import { CellData as VtkItem } from 'react-vtk-js';
import VtkItem from '../utils/CellData';

/**
 * CellData is exposing a vtkCellData to a downstream element
 */
export default function CellData(props) {
  return <React.Suspense><VtkItem {...props} /></React.Suspense>;
};

CellData.defaultProps = {};

CellData.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
