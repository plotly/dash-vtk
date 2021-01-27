# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class VolumeRepresentation(Component):
    """A VolumeRepresentation component.
VolumeRepresentation is responsible to convert a vtkPolyData into rendering
It takes the following set of properties:
  - colorBy: ['POINTS', ''],
  - pointSize: 1,
  - color: [1,1,1],

Keyword arguments:
- children (list of a list of or a singular dash component, string or numbers | a list of or a singular dash component, string or number; optional)
- id (string; optional): The ID used to identify this component.
- mapper (dict; optional): Properties to set to the mapper
- volume (dict; optional): Properties to set to the volume
- property (dict; optional): Properties to set to the volume.property
- colorMapPreset (string; default 'erdc_rainbow_bright'): Preset name for the lookup table color map
- colorDataRange (list of numbers | string; default 'auto'): Data range use for the colorMap"""
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, mapper=Component.UNDEFINED, volume=Component.UNDEFINED, property=Component.UNDEFINED, colorMapPreset=Component.UNDEFINED, colorDataRange=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'mapper', 'volume', 'property', 'colorMapPreset', 'colorDataRange']
        self._type = 'VolumeRepresentation'
        self._namespace = 'dash_vtk'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'mapper', 'volume', 'property', 'colorMapPreset', 'colorDataRange']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(VolumeRepresentation, self).__init__(children=children, **args)
