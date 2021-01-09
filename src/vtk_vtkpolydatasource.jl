# AUTO GENERATED FILE - DO NOT EDIT

export vtk_vtkpolydatasource

"""
    vtk_vtkpolydatasource(;kwargs...)
    vtk_vtkpolydatasource(children::Any;kwargs...)
    vtk_vtkpolydatasource(children_maker::Function;kwargs...)


A VtkPolyDataSource component.
VtkPolyDataSource is exposing a polydata to a downstream filter
It takes the following set of properties:
  - points: [x, y, z, x, y, z, ...],
  - connectivity: 'manual', // [manual, points, triangles, strips]
  - verts: [cellSize, pointId0, pointId1, ..., cellSize, pointId0, ...]
  - lines: [cellSize, pointId0, pointId1, ..., cellSize, pointId0, ...]
  - polys: [cellSize, pointId0, pointId1, ..., cellSize, pointId0, ...]
  - strips: [cellSize, pointId0, pointId1, ..., cellSize, pointId0, ...]
Keyword arguments:
- `children` (Array of a list of or a singular dash component, string or numbers | a list of or a singular dash component, string or number; optional): List of representation to show
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `port` (Real; optional): downstream connection port
- `points` (Array of Reals; optional): xyz coordinates
- `verts` (Array of Reals; optional): verts cells
- `lines` (Array of Reals; optional): lines cells
- `polys` (Array of Reals; optional): polys cells
- `strips` (Array of Reals; optional): strips cells
- `connectivity` (String; optional): Type of connectivity `manual` or implicit such as `points`, `triangles`, `strips`
"""
function vtk_vtkpolydatasource(; kwargs...)
        available_props = Symbol[:children, :id, :port, :points, :verts, :lines, :polys, :strips, :connectivity]
        wild_props = Symbol[]
        return Component("vtk_vtkpolydatasource", "VtkPolyDataSource", "dash_vtk", available_props, wild_props; kwargs...)
end

vtk_vtkpolydatasource(children::Any; kwargs...) = vtk_vtkpolydatasource(;kwargs..., children = children)
vtk_vtkpolydatasource(children_maker::Function; kwargs...) = vtk_vtkpolydatasource(children_maker(); kwargs...)

