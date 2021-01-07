import React from 'react';
import PropTypes from 'prop-types';

/**
 * VtkFieldData is exposing a vtkFieldData to a downstream element
 * It provides the following properties to its children:
 *   - pass along: 'view', 'representation`, `setProps`
 *   - `fields` == `vtkFieldData`
 */
export default function VtkFieldData(props) {
  const { id, setProps, children, view, representation, dataset } = props;
  const addOnProps = {
    fields: dataset.getFieldData(),
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

VtkFieldData.defaultProps = {};

VtkFieldData.propTypes = {
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
