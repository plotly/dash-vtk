import React from 'react';
import PropTypes from 'prop-types';

import { ShareDataSet as VtkItem } from 'react-vtk-js';

/**
 * ShareDataSet capture a dataset or a source and allow it to use it in another
 * pipeline or representation.
 */
export default function ShareDataSet(props) {
  return <VtkItem {...props} />;
};

ShareDataSet.defaultProps = {
  port: 0,
  name: 'shared',
};

ShareDataSet.propTypes = {
  /**
   * The ID used to identify this component.
   */
  id: PropTypes.string,

  /**
   * downstream connection port
   */
  port: PropTypes.number,

  /**
   * Unique dataset name to cross reference
   */
  name: PropTypes.string,

  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
