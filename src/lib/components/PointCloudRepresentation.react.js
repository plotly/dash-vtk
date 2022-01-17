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
};
