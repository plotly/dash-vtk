import React from 'react';
import PropTypes from 'prop-types';

import { DataSetContext, FieldsContext } from './VtkView.react';

/**
 * VtkPointData is exposing a vtkPointData to a downstream element
 */
export default function VtkPointData(props) {
  return (
    <DataSetContext.Consumer>
      {
        (dataset) =>
          <FieldsContext.Provider value={dataset.getPointData()}>
            {props.children}
          </FieldsContext.Provider>
      }
    </DataSetContext.Consumer>
  );
}

VtkPointData.defaultProps = {};

VtkPointData.propTypes = {
  /**
   * List of representation to show
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
};
