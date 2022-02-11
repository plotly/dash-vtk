/* eslint-disable no-magic-numbers */
import React from 'react';
import PropTypes from 'prop-types';
import { View as VtkItem } from '../AsyncReactVTK';

/**
 * View is responsible to render vtk.js data.
 * It takes the following set of properties:
 *   - `background`: [0.2, 0.3, 0.4]
 *   - `cameraPosition`: [0, 0, 1]
 *   - `cameraViewUp`: [0, 1, 0]
 *   - `cameraParallelProjection`: false
 *   - `showOrientationAxes`: true
 */
export default function View(props) {
  return <React.Suspense fallback={null}><VtkItem {...props} /></React.Suspense>;
};

View.defaultProps = {
  style: {
    width: '100%',
    height: '100%',
  },
  triggerRender: 0,
  triggerResetCamera: 0,
  background: [0.2, 0.3, 0.4],
  cameraPosition: [0, 0, 1],
  cameraViewUp: [0, 1, 0],
  cameraParallelProjection: false,
  interactorSettings: [
    {
      button: 1,
      action: 'Rotate',
    },
    {
      button: 2,
      action: 'Pan',
    },
    {
      button: 3,
      action: 'Zoom',
      scrollEnabled: true,
    },
    {
      button: 1,
      action: 'Pan',
      shift: true,
    },
    {
      button: 1,
      action: 'Zoom',
      alt: true,
    },
    {
      button: 1,
      action: 'ZoomToMouse',
      control: true,
    },
    {
      button: 1,
      action: 'Roll',
      alt: true,
      shift: true,
    },
  ],
  showOrientationAxes: true,
};

View.propTypes = {
  /**
   * The ID used to identify this component.
   */
  id: PropTypes.string,

  /**
   * Allow user to override the default View style { width: '100%', height: '100%' }
   */
  style: PropTypes.object,

  /**
   * Allow user to provide custom className associated to root element
   */
  className: PropTypes.string,

  /**
   * The color of the view background using 3 floating numbers
   * between 0-1 of Red, Green, Blue component.
   */
  background: PropTypes.array,

  /**
   * Configure the interactions
   */
  interactorSettings: PropTypes.array,

  /**
   * Initial camera position from an object in [0,0,0]
   */
  cameraPosition: PropTypes.array,

  /**
   * Initial camera position from an object in [0,0,0]
   */
  cameraViewUp: PropTypes.array,

  /**
   * Use parallel projection (default: false)
   */
  cameraParallelProjection: PropTypes.bool,

  /**
   * Property use to trigger a render when changing.
   */
  triggerRender: PropTypes.number,

  /**
   * Property use to trigger a resetCamera when changing.
   */
  triggerResetCamera: PropTypes.number,

  /**
   * List of picking listeners to bind. The supported values are `click` and `hover`. By default it is disabled (empty array).
   */
  pickingModes: PropTypes.arrayOf(PropTypes.string),

  /**
   * Read-only prop. To use this, make sure that `pickingModes` contains `click`.
   * This prop is updated when an element in the map is clicked. This contains
   * the picking info describing the object being clicked on.
   */
  clickInfo: PropTypes.object,

  /**
   * Read-only prop. To use this, make sure that `pickingModes` contains `hover`.
   * This prop is updated when an element in the map is hovered. This contains
   * the picking info describing the object being hovered.
   */
  hoverInfo: PropTypes.object,

  /**
   * List of representation to show
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),

  /**
   * Show/Hide orientation axes.
   */
  showOrientationAxes: PropTypes.bool,
};
