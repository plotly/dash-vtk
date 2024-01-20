# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class PolyData(Component):
    """A PolyData component.
PolyData is exposing a vtkPolyData to a downstream filter
It takes the following set of properties:
  - points: [x, y, z, x, y, z, ...],
  - verts: [cellSize, pointId0, pointId1, ..., cellSize, pointId0, ...]
  - lines: [cellSize, pointId0, pointId1, ..., cellSize, pointId0, ...]
  - polys: [cellSize, pointId0, pointId1, ..., cellSize, pointId0, ...]
  - strips: [cellSize, pointId0, pointId1, ..., cellSize, pointId0, ...]
Cell connectivity helper property:
  - connectivity: 'manual', // [manual, points, triangles, strips]

Keyword arguments:

- children (list of a list of or a singular dash component, string or numbers | a list of or a singular dash component, string or number; optional)

- id (string; optional):
    The ID used to identify this component.

- connectivity (string; default 'manual'):
    Type of connectivity `manual` or implicit such as `points`,
    `triangles`, `strips`.

- lines (list of numbers; optional):
    lines cells.

- points (list of numbers; optional):
    xyz coordinates.

- polys (list of numbers; optional):
    polys cells.

- port (number; default 0):
    downstream connection port.

- strips (list of numbers; optional):
    strips cells.

- verts (list of numbers; optional):
    verts cells."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'dash_vtk'
    _type = 'PolyData'
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, port=Component.UNDEFINED, points=Component.UNDEFINED, verts=Component.UNDEFINED, lines=Component.UNDEFINED, polys=Component.UNDEFINED, strips=Component.UNDEFINED, connectivity=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'connectivity', 'lines', 'points', 'polys', 'port', 'strips', 'verts']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'connectivity', 'lines', 'points', 'polys', 'port', 'strips', 'verts']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(PolyData, self).__init__(children=children, **args)
