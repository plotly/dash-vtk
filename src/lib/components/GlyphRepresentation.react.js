import React from 'react';
import PropTypes from 'prop-types';

import { GlyphRepresentation as VtkItem } from '../AsyncReactVTK';

/**
 * GlyphRepresentation using a source on port=1 as Glyph and the points of the source on port=0 to position the given glyphs
 * It takes the following set of properties:
 * - actor: Properties to assign to the vtkActor
 * - mapper: Properties to assign to the vtkGlyph3DMapper
 * - property: Properties to assign to the vtkProperty (actor.getProperty())
 * - colorMapPreset: Name of the preset to use for controlling the color mapping
 * - colorDataRange: Range to use for the color scale
 */
export default function GeometryRepresentation(props) {
  return <React.Suspense fallback={null}><VtkItem {...props} /></React.Suspense>;
};

GeometryRepresentation.defaultProps = {
  colorMapPreset: 'erdc_rainbow_bright',
  colorDataRange: [0, 1],
};

GeometryRepresentation.propTypes = {
  /**
   * The ID used to identify this component.
   */
  id: PropTypes.string,

  /**
   * Properties to set to the actor
   */
  actor: PropTypes.object,

  /**
   * Properties to set to the vtkGlyph3DMapper
   */
  mapper: PropTypes.object,

  /**
   * Properties to set to the actor.property
   */
  property: PropTypes.object,

  /**
   * Preset name for the lookup table color map
   */
  colorMapPreset: PropTypes.string,

  /**
   * Data range use for the colorMap
   */
  colorDataRange: PropTypes.arrayOf(PropTypes.number),

  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
