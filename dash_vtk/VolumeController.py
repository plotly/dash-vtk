# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class VolumeController(Component):
    """A VolumeController component.
VolumeController is a GUI to control the piecewise function

Keyword arguments:
- id (string; optional): The ID used to identify this component.
- size (list of numbers; default [400, 150]): Controller size in pixels
- rescaleColorMap (boolean; default True): Use opacity range to rescale color map"""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, size=Component.UNDEFINED, rescaleColorMap=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'size', 'rescaleColorMap']
        self._type = 'VolumeController'
        self._namespace = 'dash_vtk'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'size', 'rescaleColorMap']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(VolumeController, self).__init__(**args)
