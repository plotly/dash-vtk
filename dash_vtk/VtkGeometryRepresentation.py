# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class VtkGeometryRepresentation(Component):
    """A VtkGeometryRepresentation component.
VtkGeometryRepresentation is responsible to convert a vtkPolyData into rendering
It takes the following set of properties:
  - colorBy: ['POINTS', ''],
  - pointSize: 1,
  - color: [1,1,1],

Keyword arguments:
- children (list of a list of or a singular dash component, string or numbers | a list of or a singular dash component, string or number; optional): List of representation to show
- id (string; optional): The ID used to identify this component in Dash callbacks.
- colorBy (list of strings; default ['pointData', '']): Choose which array to color the output with.
- ['pointData', 'temperature']
- ['cellData', 'pressure']
- pointSize (number; default 1): pointSize for vertex rendering
- color (list of numbers; default [1, 1, 1]): When no colorBy array is provided use provided solid color"""
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, colorBy=Component.UNDEFINED, pointSize=Component.UNDEFINED, color=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'colorBy', 'pointSize', 'color']
        self._type = 'VtkGeometryRepresentation'
        self._namespace = 'dash_vtk'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'colorBy', 'pointSize', 'color']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(VtkGeometryRepresentation, self).__init__(children=children, **args)
