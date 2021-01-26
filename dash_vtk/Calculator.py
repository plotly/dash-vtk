# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Calculator(Component):
    """A Calculator component.
Calculator is exposing a source or filter to a downstream filter
It takes the following set of properties:
  - name: 'scalars'    // name of the generated field
  - location: 'POINT'  // POINT/CELL
  - arrays: []         // Name of array to have access in formula
  - formula: fn

Keyword arguments:
- children (list of a list of or a singular dash component, string or numbers | a list of or a singular dash component, string or number; optional)
- id (string; optional): The ID used to identify this component.
- port (number; default 0): downstream connection port
- name (string; default 'scalars'): Field name
- location (string; default 'POINT'): Field location [POINT, CELL, COORDINATE, SCALARS, ]
- arrays (list of strings; optional): List of fields you want available for your formula"""
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, port=Component.UNDEFINED, name=Component.UNDEFINED, location=Component.UNDEFINED, arrays=Component.UNDEFINED, formula=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'port', 'name', 'location', 'arrays']
        self._type = 'Calculator'
        self._namespace = 'dash_vtk'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'port', 'name', 'location', 'arrays']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Calculator, self).__init__(children=children, **args)
