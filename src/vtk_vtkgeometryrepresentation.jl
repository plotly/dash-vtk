# AUTO GENERATED FILE - DO NOT EDIT

export vtk_vtkgeometryrepresentation

"""
    vtk_vtkgeometryrepresentation(;kwargs...)
    vtk_vtkgeometryrepresentation(children::Any;kwargs...)
    vtk_vtkgeometryrepresentation(children_maker::Function;kwargs...)


A VtkGeometryRepresentation component.
VtkGeometryRepresentation is responsible to convert a vtkPolyData into rendering
It takes the following set of properties:
  - colorBy: ['POINTS', ''],
  - pointSize: 1,
  - color: [1,1,1],
It provides the following properties to its children:
  - 'representation`: this
  - `downstream` == `mapper` which should be used to call setInputConnection/setInputData
Keyword arguments:
- `children` (Array of a list of or a singular dash component, string or numbers | a list of or a singular dash component, string or number; optional): List of representation to show
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `colorBy` (Array of Strings; optional): Choose which array to color the output with.
- ['pointData', 'temperature']
- ['cellData', 'pressure']
- `pointSize` (Real; optional): pointSize for vertex rendering
- `color` (Array of Reals; optional): When no colorBy array is provided use provided solid color
- `view` (Dict; optional)
"""
function vtk_vtkgeometryrepresentation(; kwargs...)
        available_props = Symbol[:children, :id, :colorBy, :pointSize, :color, :view]
        wild_props = Symbol[]
        return Component("vtk_vtkgeometryrepresentation", "VtkGeometryRepresentation", "dash_vtk", available_props, wild_props; kwargs...)
end

vtk_vtkgeometryrepresentation(children::Any; kwargs...) = vtk_vtkgeometryrepresentation(;kwargs..., children = children)
vtk_vtkgeometryrepresentation(children_maker::Function; kwargs...) = vtk_vtkgeometryrepresentation(children_maker(); kwargs...)

