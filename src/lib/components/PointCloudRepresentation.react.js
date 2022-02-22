import React from 'react';
import PropTypes from 'prop-types';

import { PointCloudRepresentation as VtkItem } from '../AsyncReactVTK';

/**
 * PointCloudRepresentation expect the following set of properties
 *   - xyz: [x0, y0, z0, x1, ..., zn]
 *   - rgb: [...]
 *   - rgba: [...]
 *   - scalars: [...]
 */
export default function PointCloudRepresentation(props) {
  return <React.Suspense fallback={null}><VtkItem {...props} /></React.Suspense>;
};

PointCloudRepresentation.defaultProps = {
  xyz: [0, 0, 0],
  colorMapPreset: 'erdc_rainbow_bright',
  colorDataRange: [0, 1],
  showCubeAxes: false,
  showScalarBar: false,
  scalarBarTitle: '',
};

PointCloudRepresentation.propTypes = {
  /**
   * The ID used to identify this component.
   */
  id: PropTypes.string,
  /**
   * Points coordinates
   */
  xyz: PropTypes.arrayOf(PropTypes.number),
  /**
   * Use RGB values to attach to the points/vertex
   */
  rgb: PropTypes.arrayOf(PropTypes.number),
  /**
   * Use RGBA values to attach to the points/vertex
   */
  rgba: PropTypes.arrayOf(PropTypes.number),

  /**
   * Field values to attach to the points
   */
  scalars: PropTypes.arrayOf(PropTypes.number),

  /**
   * Preset name for the lookup table color map
   */
  colorMapPreset: PropTypes.string,

  /**
   * Data range use for the colorMap
   */
  colorDataRange: PropTypes.arrayOf(PropTypes.number),

  /**
   * Properties to set to the actor.property
   */
  property: PropTypes.object,

  /**
   * Show/Hide Cube Axes for the given representation
   */
  showCubeAxes: PropTypes.bool,

  /**
   * Configure cube Axes style by overriding the set of properties defined
   * https://github.com/Kitware/vtk-js/blob/HEAD/Sources/Rendering/Core/CubeAxesActor/index.js#L703-L719
   */
  cubeAxesStyle: PropTypes.object,

  /**
   * Show hide scalar bar for that representation
   */
  showScalarBar: PropTypes.bool,

  /**
   * Use given string as title for scalar bar. By default it is empty (no title).
   */
  scalarBarTitle: PropTypes.string,

  /**
   * Configure scalar bar style by overriding the set of properties defined
   * https://github.com/Kitware/vtk-js/blob/master/Sources/Rendering/Core/ScalarBarActor/index.js#L776-L796
   */
  scalarBarStyle: PropTypes.object,
};
