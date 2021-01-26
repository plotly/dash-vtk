# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class GeometryRepresentation(Component):
    """A GeometryRepresentation component.
GeometryRepresentation is responsible to convert a vtkPolyData into rendering
It takes the following set of properties:
  - colorBy: ['POINTS', ''],
  - pointSize: 1,
  - color: [1,1,1],

Keyword arguments:
- children (list of a list of or a singular dash component, string or numbers | a list of or a singular dash component, string or number; optional)
- id (string; optional): The ID used to identify this component.
- actor (dict; optional): Properties to set to the actor
- mapper (dict; optional): Properties to set to the actor
- property (dict; optional): Properties to set to the actor.property
- colorMapPreset (string; default 'erdc_rainbow_bright'): Preset name for the lookup table color map
- colorDataRange (list of numbers; default [0, 1]): Data range use for the colorMap"""
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, actor=Component.UNDEFINED, mapper=Component.UNDEFINED, property=Component.UNDEFINED, colorMapPreset=Component.UNDEFINED, colorDataRange=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'actor', 'mapper', 'property', 'colorMapPreset', 'colorDataRange']
        self._type = 'GeometryRepresentation'
        self._namespace = 'dash_vtk'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'actor', 'mapper', 'property', 'colorMapPreset', 'colorDataRange']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(GeometryRepresentation, self).__init__(children=children, **args)
