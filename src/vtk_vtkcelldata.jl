# AUTO GENERATED FILE - DO NOT EDIT

export vtk_vtkcelldata

"""
    vtk_vtkcelldata(;kwargs...)
    vtk_vtkcelldata(children::Any;kwargs...)
    vtk_vtkcelldata(children_maker::Function;kwargs...)


A VtkCellData component.
VtkCellData is exposing a VtkCellData to a downstream element
It provides the following properties to its children:
  - pass along: 'view', 'representation`, `setProps`
  - `fields` == `VtkCellData`
Keyword arguments:
- `children` (Array of a list of or a singular dash component, string or numbers | a list of or a singular dash component, string or number; optional): List of representation to show
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `view` (Dict; optional): Passed by parent
- `representation` (Dict; optional): Passed by parent
- `dataset` (Dict; optional): Passed by parent
"""
function vtk_vtkcelldata(; kwargs...)
        available_props = Symbol[:children, :id, :view, :representation, :dataset]
        wild_props = Symbol[]
        return Component("vtk_vtkcelldata", "VtkCellData", "dash_vtk", available_props, wild_props; kwargs...)
end

vtk_vtkcelldata(children::Any; kwargs...) = vtk_vtkcelldata(;kwargs..., children = children)
vtk_vtkcelldata(children_maker::Function; kwargs...) = vtk_vtkcelldata(children_maker(); kwargs...)

