# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class GlyphRepresentation(Component):
    """A GlyphRepresentation component.
GlyphRepresentation using a source on port=1 as Glyph and the points of the source on port=0 to position the given glyphs
It takes the following set of properties:
- actor: Properties to assign to the vtkActor
- mapper: Properties to assign to the vtkGlyph3DMapper
- property: Properties to assign to the vtkProperty (actor.getProperty())
- colorMapPreset: Name of the preset to use for controlling the color mapping
- colorDataRange: Range to use for the color scale

Keyword arguments:

- children (list of a list of or a singular dash component, string or numbers | a list of or a singular dash component, string or number; optional)

- id (string; optional):
    The ID used to identify this component.

- actor (dict; optional):
    Properties to set to the actor.

- colorDataRange (list of numbers; default [0, 1]):
    Data range use for the colorMap.

- colorMapPreset (string; default 'erdc_rainbow_bright'):
    Preset name for the lookup table color map.

- mapper (dict; optional):
    Properties to set to the vtkGlyph3DMapper.

- property (dict; optional):
    Properties to set to the actor.property."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'dash_vtk'
    _type = 'GlyphRepresentation'
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, actor=Component.UNDEFINED, mapper=Component.UNDEFINED, property=Component.UNDEFINED, colorMapPreset=Component.UNDEFINED, colorDataRange=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'actor', 'colorDataRange', 'colorMapPreset', 'mapper', 'property']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'actor', 'colorDataRange', 'colorMapPreset', 'mapper', 'property']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(GlyphRepresentation, self).__init__(children=children, **args)
