import React from 'react';

/**
 * VtkPointData is exposing a vtkPointData to a downstream element
 * It provides the following properties to its children:
 *   - pass along: 'view', 'representation`, `setProps`
 *   - `fields` == `vtkPointData`
 */
export default function VtkPointData(props) {
    const { id, setProps, children, view, representation, dataset } = props;
    const addOnProps = {
      fields: dataset.getPointData(),
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

VtkPointData.defaultProps = {};

VtkPointData.propTypes = {};
