# AUTO GENERATED FILE - DO NOT EDIT

export vtk_polydata

"""
    vtk_polydata(;kwargs...)
    vtk_polydata(children::Any;kwargs...)
    vtk_polydata(children_maker::Function;kwargs...)


A PolyData component.
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
- `children` (Array of a list of or a singular dash component, string or numbers | a list of or a singular dash component, string or number; optional)
- `id` (String; optional): The ID used to identify this component.
- `connectivity` (String; optional): Type of connectivity `manual` or implicit such as `points`, `triangles`, `strips`
- `lines` (Array of Reals; optional): lines cells
- `points` (Array of Reals; optional): xyz coordinates
- `polys` (Array of Reals; optional): polys cells
- `port` (Real; optional): downstream connection port
- `strips` (Array of Reals; optional): strips cells
- `verts` (Array of Reals; optional): verts cells
"""
function vtk_polydata(; kwargs...)
        available_props = Symbol[:children, :id, :connectivity, :lines, :points, :polys, :port, :strips, :verts]
        wild_props = Symbol[]
        return Component("vtk_polydata", "PolyData", "dash_vtk", available_props, wild_props; kwargs...)
end

vtk_polydata(children::Any; kwargs...) = vtk_polydata(;kwargs..., children = children)
vtk_polydata(children_maker::Function; kwargs...) = vtk_polydata(children_maker(); kwargs...)

