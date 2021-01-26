# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class PointCloudRepresentation(Component):
    """A PointCloudRepresentation component.
PointCloudRepresentation expect the following set of properties
  - xyz: [x0, y0, z0, x1, ..., zn]
  - rgb: [...]
  - rgba: [...]
  - scalars: [...]

Keyword arguments:
- xyz (list of numbers; default [0, 0, 0]): Points coordinates
- rgb (list of numbers; optional): Use RGB values to attach to the points/vertex
- rgba (list of numbers; optional): Use RGBA values to attach to the points/vertex
- scalars (list of numbers; optional): Field values to attach to the points
- colorMapPreset (string; default 'erdc_rainbow_bright'): Preset name for the lookup table color map
- colorDataRange (list of numbers; default [0, 1]): Data range use for the colorMap
- property (dict; optional): Properties to set to the actor.property"""
    @_explicitize_args
    def __init__(self, xyz=Component.UNDEFINED, rgb=Component.UNDEFINED, rgba=Component.UNDEFINED, scalars=Component.UNDEFINED, colorMapPreset=Component.UNDEFINED, colorDataRange=Component.UNDEFINED, property=Component.UNDEFINED, **kwargs):
        self._prop_names = ['xyz', 'rgb', 'rgba', 'scalars', 'colorMapPreset', 'colorDataRange', 'property']
        self._type = 'PointCloudRepresentation'
        self._namespace = 'dash_vtk'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['xyz', 'rgb', 'rgba', 'scalars', 'colorMapPreset', 'colorDataRange', 'property']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(PointCloudRepresentation, self).__init__(**args)
