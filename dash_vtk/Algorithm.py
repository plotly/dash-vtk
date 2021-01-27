# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Algorithm(Component):
    """An Algorithm component.
Algorithm is exposing a source or filter to a downstream filter
It takes the following set of properties:
  - vtkClass: vtkClassName
  - state: {}

Keyword arguments:
- children (list of a list of or a singular dash component, string or numbers | a list of or a singular dash component, string or number; optional)
- id (string; optional): The ID used to identify this component.
- port (number; default 0): downstream connection port
- vtkClass (string; default 'vtkConeSource'): vtkClass name
- state (dict; optional): set of property values for vtkClass"""
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, port=Component.UNDEFINED, vtkClass=Component.UNDEFINED, state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'port', 'vtkClass', 'state']
        self._type = 'Algorithm'
        self._namespace = 'dash_vtk'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'port', 'vtkClass', 'state']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Algorithm, self).__init__(children=children, **args)
