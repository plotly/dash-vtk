import React from 'react';
import PropTypes from 'prop-types';

/**
 * VtkPointData is exposing a vtkPointData to a downstream element
 * It provides the following properties to its children:
 *   - pass along: 'view', 'representation`, `setProps`
 *   - `fields` == `vtkPointData`
 */
export default function VtkPointData(props) {
  console.log('VtkPointData:', Object.keys(props));
  const { id, setProps, children, view, representation, dataset } = props;
  console.log(' - view:', view);
  console.log(' - representation:', representation);
  console.log(' - dataset:', dataset);
  if (!dataset) {
    console.log('!! Skip render');
    return null;
  }
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

VtkPointData.propTypes = {
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
