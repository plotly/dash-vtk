# AUTO GENERATED FILE - DO NOT EDIT

export vtk_vtkpolydata

"""
    vtk_vtkpolydata(;kwargs...)
    vtk_vtkpolydata(children::Any;kwargs...)
    vtk_vtkpolydata(children_maker::Function;kwargs...)


A VtkPolyData component.
VtkPolyDataSource is exposing a polydata to a downstream filter or representation
It takes the following set of properties:
  - points: [x, y, z, x, y, z, ...],
  - verts: [cellSize, pointId0, pointId1, ..., cellSize, pointId0, ...]
  - lines: [cellSize, pointId0, pointId1, ..., cellSize, pointId0, ...]
  - polys: [cellSize, pointId0, pointId1, ..., cellSize, pointId0, ...]
  - strips: [cellSize, pointId0, pointId1, ..., cellSize, pointId0, ...]
  - pointCloud: false/true (if on it will generate verts automatically)
It provides the following properties to its children:
  - pass along: 'view', 'representation`, `setProps`
  - `dataset` == `this.dataset`
Keyword arguments:
- `children` (Array of a list of or a singular dash component, string or numbers | a list of or a singular dash component, string or number; optional): List of representation to show
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `port` (Real; optional): downstream connection port
- `points` (Array of Reals; optional): xyz coordinates
- `verts` (Array of Reals; optional): verts cells
- `lines` (Array of Reals; optional): lines cells
- `polys` (Array of Reals; optional): polys cells
- `strips` (Array of Reals; optional): strips cells
- `pointCloud` (Bool; optional): Is it point cloud
- `view` (Dict; optional): Passed by parent
- `representation` (Dict; optional): Passed by parent
"""
function vtk_vtkpolydata(; kwargs...)
        available_props = Symbol[:children, :id, :port, :points, :verts, :lines, :polys, :strips, :pointCloud, :view, :representation]
        wild_props = Symbol[]
        return Component("vtk_vtkpolydata", "VtkPolyData", "dash_vtk", available_props, wild_props; kwargs...)
end

vtk_vtkpolydata(children::Any; kwargs...) = vtk_vtkpolydata(;kwargs..., children = children)
vtk_vtkpolydata(children_maker::Function; kwargs...) = vtk_vtkpolydata(children_maker(); kwargs...)

