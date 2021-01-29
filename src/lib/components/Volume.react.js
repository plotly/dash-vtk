import React from 'react';
import PropTypes from 'prop-types';

import { ImageData, PointData, DataArray } from 'react-vtk-js';

/**
 * Volume is exposing a vtkImageData to a downstream filter
 * It takes the following set of properties:
 *   - state: { image: { ...imagedata-props }, field: { ...dataArray } }
 */
export default function Volume(props) {
  return (
    <ImageData
      id={props.id}
      port={props.port}
      {...props.state.image}
    >
      {props.state.field &&
        <PointData>
          <DataArray
            registration="setScalars"
            {...props.state.field}
          />
        </PointData>
      }
    </ImageData>
  );
};

Volume.defaultProps = {
  port: 0,
  state: {
    image: { dimension: [10, 10, 10] },
  }
};

Volume.propTypes = {
  /**
   * The ID used to identify this component.
   */
  id: PropTypes.string,

  /**
   * downstream connection port
   */
  port: PropTypes.number,

  /**
   * State of the volume
   */
  state: PropTypes.object,
};
