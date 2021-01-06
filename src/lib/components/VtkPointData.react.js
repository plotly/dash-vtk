import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * VtkPointData is exposing a vtkPointData to a downstream element
 * It provides the following properties to its children:
 *   - pass along: 'view', 'representation`, `setProps`
 *   - `fields` == `vtkPointData`
 */
export default class VtkPointData extends Component {
  render() {
    console.log('VtkPointData', this.props);
    const { id, setProps, children, view, representation, dataset } = this.props;
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
}

VtkPointData.defaultProps = {
};

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
};
