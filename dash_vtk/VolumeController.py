# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class VolumeController(Component):
    """A VolumeController component.
VolumeController is a GUI to control the piecewise function

Keyword arguments:

- id (string; optional):
    The ID used to identify this component.

- rescaleColorMap (boolean; default True):
    Use opacity range to rescale color map.

- size (list of numbers; default [400, 150]):
    Controller size in pixels."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'dash_vtk'
    _type = 'VolumeController'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, size=Component.UNDEFINED, rescaleColorMap=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'rescaleColorMap', 'size']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'rescaleColorMap', 'size']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(VolumeController, self).__init__(**args)
