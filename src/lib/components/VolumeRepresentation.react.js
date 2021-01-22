import React from 'react';
import PropTypes from 'prop-types';

import { VolumeRepresentation as VtkItem } from 'react-vtk-js';

/**
 * VolumeRepresentation is responsible to convert a vtkPolyData into rendering
 * It takes the following set of properties:
 *   - colorBy: ['POINTS', ''],
 *   - pointSize: 1,
 *   - color: [1,1,1],
 */
export default function VolumeRepresentation(props) {
  return <VtkItem {...props} />;
};

VolumeRepresentation.defaultProps = {
  colorMapPreset: 'erdc_rainbow_bright',
  colorDataRange: 'auto',
};

VolumeRepresentation.propTypes = {
  /**
   * The ID used to identify this component.
   */
  id: PropTypes.string,

  /**
   * Properties to set to the mapper
   */
  mapper: PropTypes.object,

  /**
   * Properties to set to the volume
   */
  volume: PropTypes.object,

  /**
   * Properties to set to the volume.property
   */
  property: PropTypes.object,

  /**
   * Preset name for the lookup table color map
   */
  colorMapPreset: PropTypes.string,

  /**
   * Data range use for the colorMap
   */
  colorDataRange: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.number),
    PropTypes.string,
  ]),

  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
