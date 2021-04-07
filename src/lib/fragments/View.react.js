/* eslint-disable no-magic-numbers */
import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import {View as VtkItem} from 'react-vtk-js';

import {propTypes, defaultProps} from '../components/View.react';

/**
 * View is responsible to render vtk.js data.
 * It takes the following set of properties:
 *   - `background`: [0.2, 0.3, 0.4]
 *   - `cameraPosition`: [0, 0, 1]
 *   - `cameraViewUp`: [0, 1, 0]
 *   - `cameraParallelProjection`: false
 */
export default function View(props) {
  return <VtkItem {...props} />;
};

View.defaultProps = defaultProps;

View.propTypes = propTypes;