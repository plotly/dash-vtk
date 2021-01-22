import React from 'react';
import PropTypes from 'prop-types';

import { SliceRepresentation as VtkItem } from 'react-vtk-js';

/**
 * SliceRepresentation is responsible to convert a vtkPolyData into rendering
 * It takes the following set of properties:
 *   - colorBy: ['POINTS', ''],
 *   - pointSize: 1,
 *   - color: [1,1,1],
 */
export default function SliceRepresentation(props) {
  return <VtkItem {...props} />;
};

SliceRepresentation.defaultProps = {
  colorMapPreset: 'erdc_rainbow_bright',
  colorDataRange: 'auto',
};

SliceRepresentation.propTypes = {
  /**
   * The ID used to identify this component.
   */
  id: PropTypes.string,

  /**
   * Properties to set to the mapper
   */
  mapper: PropTypes.object,

  /**
   * Properties to set to the slice/actor
   */
  actor: PropTypes.object,

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

  /**
   * index of the slice along i
   */
  iSlice: PropTypes.number,

  /**
   * index of the slice along j
   */
  jSlice: PropTypes.number,

  /**
   * index of the slice along k
   */
  kSlice: PropTypes.number,

  /**
   * index of the slice along x
   */
  xSlice: PropTypes.number,

  /**
   * index of the slice along y
   */
  ySlice: PropTypes.number,

  /**
   * index of the slice along z
   */
  zSlice: PropTypes.number,

  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
