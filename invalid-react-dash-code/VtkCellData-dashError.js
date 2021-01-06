import React from 'react';

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

VtkCellData.propTypes = {};
