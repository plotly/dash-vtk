import React from 'react';
import PropTypes from 'prop-types';

import { DataSetContext, FieldsContext } from './VtkView.react';

/**
 * VtkCellData is exposing a vtkCellData to a downstream element
 */
export default function VtkCellData(props) {
  return (
    <DataSetContext.Consumer>
      {
        (dataset) =>
          <FieldsContext.Provider value={dataset.getCellData()}>
            {props.children}
          </FieldsContext.Provider>
      }
    </DataSetContext.Consumer>
  );
}

VtkCellData.defaultProps = {};

VtkCellData.propTypes = {
  /**
   * List of representation to show
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
};
