/* eslint-disable no-magic-numbers */
import React from 'react';
import PropTypes from 'prop-types';

import { VolumeController as VtkItem } from 'react-vtk-js';

/**
 * VolumeController is a GUI to control the piecewise function
 */
export default function VolumeController(props) {
  return <VtkItem {...props} />;
};

VolumeController.defaultProps = {
  size: [400, 150],
  rescaleColorMap: true,
};

VolumeController.propTypes = {
  /**
   * The ID used to identify this component.
   */
  id: PropTypes.string,

  /**
   * Controller size in pixels
   */
  size: PropTypes.arrayOf(PropTypes.number),

  /**
   * Use opacity range to rescale color map
   */
  rescaleColorMap: PropTypes.bool,
};
