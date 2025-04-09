# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Mesh(Component):
    """A Mesh component.
Mesh is exposing a vtkPolyData to a downstream filter
It takes the following set of properties:
  - state: { mesh: { ...polydata-props }, field: { ...dataArray } }

Keyword arguments:

- id (string; optional):
    The ID used to identify this component.

- port (number; default 0):
    downstream connection port.

- state (dict; default {  mesh: { points: [] },}):
    State of the mesh."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'dash_vtk'
    _type = 'Mesh'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, port=Component.UNDEFINED, state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'port', 'state']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'port', 'state']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(Mesh, self).__init__(**args)
