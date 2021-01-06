import React from 'react';

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

VtkFieldData.propTypes = {};
