import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { FieldsContext } from './VtkView.react';

import vtkDataArray from 'vtk.js/Sources/Common/Core/DataArray';
import { TYPED_ARRAYS } from 'vtk.js/Sources/macro';

/**
 * VtkDataArray is creating a vtkDataArray for the container fields
 * It takes the following set of properties:
 *   - type: 'Float32Array', 'Float64Array', 'Uint16Array', ...
 *   - values: [number, number, ...]
 *   - numberOfComponents: 1,
 *   - registration: 'addArray', 'setScalars', ...
 */
export default class VtkDataArray extends Component {
  constructor(props) {
    super(props);

    // Create vtk.js data array
    this.array = vtkDataArray.newInstance({ empty: true });
  }

  render() {
    return (
      <FieldsContext.Consumer>
        {(fields) => {
          if (!this.fields) {
            this.fields = fields;
          }
        }}
      </FieldsContext.Consumer>
    );
  }

  componentDidMount() {
    this.update(this.props);
    this.fields[this.props.registration](this.array);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    this.update(this.props, prevProps);
  }

  componentWillUnmount() {
    this.fields.removeArray(this.array);
    this.array.delete();
    this.array = null;
  }

  update(props, previous) {
    const { name, type, values, numberOfComponents } = props;
    const klass = TYPED_ARRAYS[type];
    let changeDetected = false;

    // NoOp if same...
    this.array.setName(name);

    if (type && (!previous || type !== previous.type)) {
      changeDetected = true;
    }

    if (numberOfComponents && (!previous || numberOfComponents !== previous.numberOfComponents)) {
      changeDetected = true;
    }

    if (values && (changeDetected || !previous || values !== previous.values)) {
      this.array.setData(klass.from(values), numberOfComponents);
    }
  }
}

VtkDataArray.defaultProps = {
  name: 'scalars',
  type: 'Float32Array',
  values: [],
  numberOfComponents: 1,
  registration: 'addArray',
};

VtkDataArray.propTypes = {
  /**
   * The ID used to identify this component in Dash callbacks.
   */
  id: PropTypes.string,

  /**
   * Dash-assigned callback that should be called to report property changes
   * to Dash, to make them available for callbacks.
   */
  setProps: PropTypes.func,

  // -- vtk.js exposed properties

  /**
   * Typed array name
   */
  type: PropTypes.string,

  /**
   * Field name
   */
  name: PropTypes.string,

  /**
   * Actual values to use inside our array
   */
  values: PropTypes.arrayOf(PropTypes.number),

  /**
   * Number of components / Tuple size
   */
  numberOfComponents: PropTypes.number,

  /**
   * Name of the method to call on the fieldData (addArray, setScalars, setVectors...)
   */
  registration: PropTypes.string,
};
