# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Volume(Component):
    """A Volume component.
Volume is exposing a vtkImageData to a downstream filter
It takes the following set of properties:
  - state: { image: { ...imagedata-props }, field: { ...dataArray } }

Keyword arguments:

- id (string; optional):
    The ID used to identify this component.

- port (number; default 0):
    downstream connection port.

- state (dict; default {  image: { dimension: [10, 10, 10] },}):
    State of the volume."""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, port=Component.UNDEFINED, state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'port', 'state']
        self._type = 'Volume'
        self._namespace = 'dash_vtk'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'port', 'state']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Volume, self).__init__(**args)
