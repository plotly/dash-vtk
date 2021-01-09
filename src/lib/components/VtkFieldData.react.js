import React from 'react';
import PropTypes from 'prop-types';

import { DataSetContext, FieldsContext } from './VtkView.react';

/**
 * VtkFieldData is exposing a vtkFieldData to a downstream element
 */
export default function VtkFieldData(props) {
  return (
    <DataSetContext.Consumer>
      {
        (dataset) =>
          <FieldsContext.Provider value={dataset.getFieldData()}>
            {props.children}
          </FieldsContext.Provider>
      }
    </DataSetContext.Consumer>
  );
}

VtkFieldData.defaultProps = {};

VtkFieldData.propTypes = {
  /**
   * List of representation to show
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
};
