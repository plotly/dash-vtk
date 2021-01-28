# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class VtkView(Component):
    """A VtkView component.
VtkView is responsible to render vtk.js data.
It takes the following set of properties:
  - `background`: [0.2, 0.3, 0.4]

Keyword arguments:
- children (list of a list of or a singular dash component, string or numbers | a list of or a singular dash component, string or number; optional): List of representation to show
- id (string; optional): The ID used to identify this component in Dash callbacks.
- background (list; default [0.2, 0.3, 0.4]): The color of the view background using 3 floating numbers
between 0-1 of Red, Green, Blue component."""
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, background=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'background']
        self._type = 'VtkView'
        self._namespace = 'dash_vtk'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'background']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(VtkView, self).__init__(children=children, **args)
