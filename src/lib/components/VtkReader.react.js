import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { VueContext, DownstreamContext } from './VtkView.react';

import vtk from 'vtk.js/Sources/vtk';
import Base64 from 'vtk.js/Sources/Common/Core/Base64';

/**
 * VtkReader is exposing a reader to a downstream filter
 * It takes the following set of properties:
 *   - vtkClass: vtk.js reader class name
 *   - url: string
 *   - parseAsText: string
 *   - parseAsArrayBuffer: base64String
 */
export default class VtkReader extends Component {
  constructor(props) {
    super(props);

    // Create vtk.js algorithm
    this.reader = null;
  }

  render() {
    return (
      <VueContext.Consumer>
        {(view) => (
          <DownstreamContext.Consumer>
            {(downstream) => {
              if (!this.reader) {
                const { vtkClass } = this.props;
                this.reader = vtk({ vtkClass });
              }
              if (!this.downstream) {
                downstream.setInputConnection(this.reader.getOutputPort(), this.props.port);
                this.downstream = downstream;
              }
              this.view = view;
              return (
                <DownstreamContext.Provider value={this.reader}>
                  <div id={this.props.id}>
                    {this.props.children}
                  </div>
                </DownstreamContext.Provider>
              );
            }}
          </DownstreamContext.Consumer>
        )}
      </VueContext.Consumer>
    );
  }

  componentDidMount() {
    this.update(this.props);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    this.update(this.props, prevProps);
  }

  componentWillUnmount() {
    this.reader.delete();
    this.reader = null;
  }

  update(props, previous) {
    const { vtkClass, url, parseAsText, parseAsArrayBuffer } = props;

    if (vtkClass && (!previous || vtkClass !== previous.vtkClass)) {
      this.reader = vtk({ vtkClass });
      this.downstream.setInputConnection(this.reader.getOutputPort(), this.props.port);
    }

    if (url && (!previous || url !== previous.url)) {
      this.reader.setUrl(url).then(() => {
        if (this.view) {
          if (this.props.resetCameraOnUpdate) {
            this.view.resetCamera();
          }
          if (this.props.renderOnUpdate) {
            this.view.renderView();
          }
        }
      });
    }

    if (parseAsText && (!previous || parseAsText !== previous.parseAsText)) {
      this.reader.parseAsText(parseAsText);
    }

    if (parseAsArrayBuffer && (!previous || parseAsArrayBuffer !== previous.parseAsArrayBuffer)) {
      this.reader.parseAsArrayBuffer(Base64.toArrayBuffer(parseAsArrayBuffer));
    }

    if (this.view) {
      if (this.props.resetCameraOnUpdate) {
        this.view.resetCamera();
      }
      if (this.props.renderOnUpdate) {
        this.view.renderView();
      }
    }
  }
}

VtkReader.defaultProps = {
  port: 0,
  vtkClass: '',
  renderOnUpdate: true,
  resetCameraOnUpdate: true,
};

VtkReader.propTypes = {
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
   * set of url to fetch data from
   */
  url: PropTypes.string,

  /**
   * set text data to process
   */
  parseAsText: PropTypes.string,

  /**
   * set binary data to process from base64 string
   */
  parseAsArrayBuffer: PropTypes.string,

  /**
   * Automatically render on data loaded
   */
  renderOnUpdate: PropTypes.bool,

  /**
   * Automatically reset camera on data loaded
   */
  resetCameraOnUpdate: PropTypes.bool,

  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
};
