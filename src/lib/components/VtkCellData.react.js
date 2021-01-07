import React from 'react';
import PropTypes from 'prop-types';

/**
 * VtkCellData is exposing a vtkCellData to a downstream element
 * It provides the following properties to its children:
 *   - pass along: 'view', 'representation`, `setProps`
 *   - `fields` == `vtkCellData`
 */
export default function VtkCellData(props) {
  const { id, setProps, children, view, representation, dataset } = props;
  const addOnProps = {
    fields: dataset.getCellData(),
    dataset,
    representation,
    view,
    setProps,
  };
  const childrenWithViewProp = React.Children.map(children, child => React.cloneElement(child, addOnProps));
  return (
    <div id={id}>
      {childrenWithViewProp}
    </div>
  );
}

VtkCellData.defaultProps = {};


VtkCellData.propTypes = {
  /**
   * The ID used to identify this component in Dash callbacks.
   */
  id: PropTypes.string,

  /**
   * Dash-assigned callback that should be called to report property changes
   * to Dash, to make them available for callbacks.
   */
  setProps: PropTypes.func,

  /**
   * List of representation to show
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),

  // pass by parent
  view: PropTypes.object,
  representation: PropTypes.object,
  dataset: PropTypes.object,
};
