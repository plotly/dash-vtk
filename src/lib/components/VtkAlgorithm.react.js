import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { DownstreamContext } from './VtkView.react';

import vtk from 'vtk.js/Sources/vtk';

/**
 * VtkAlgorithm is exposing a source or filter to a downstream filter
 * It takes the following set of properties:
 *   - vtkClass: vtkClassName
 *   - state: {}
 */
export default class VtkAlgorithm extends Component {
  constructor(props) {
    super(props);

    // Create vtk.js algorithm
    this.algo = null;
  }

  render() {
    return (
      <DownstreamContext.Consumer>
        {(downstream) => {
          if (!this.algo) {
            const { vtkClass, state } = this.props;
            this.algo = vtk({ vtkClass, ...state });
          }
          if (!this.downstream) {
            downstream.setInputConnection(this.algo.getOutputPort(), this.props.port);
            this.downstream = downstream;
          }
          return (
            <DownstreamContext.Provider value={this.algo}>
              <div id={this.props.id}>
                {this.props.children}
              </div>
            </DownstreamContext.Provider>
          );
        }}
      </DownstreamContext.Consumer>
    );
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    this.update(this.props, prevProps);
  }

  componentWillUnmount() {
    this.algo.delete();
    this.algo = null;
  }

  update(props, previous) {
    const { vtkClass, state } = props;

    if (vtkClass && (!previous || vtkClass !== previous.vtkClass)) {
      this.algo = vtk({ vtkClass, ...state });
      this.downstream.setInputConnection(this.algo.getOutputPort(), this.props.port);
    }

    if (state && (!previous || state !== previous.state)) {
      this.algo.set(state);
    }
  }
}

VtkAlgorithm.defaultProps = {
  port: 0,
  vtkClass: 'vtkConeSource',
  state: {},
};

VtkAlgorithm.propTypes = {
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
   * downstream connection port
   */
  port: PropTypes.number,

  /**
   * vtkClass name
   */
  vtkClass: PropTypes.string,

  /**
   * set of property values for vtkClass
   */
  state: PropTypes.object,

  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
};
