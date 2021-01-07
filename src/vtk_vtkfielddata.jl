# AUTO GENERATED FILE - DO NOT EDIT

export vtk_vtkfielddata

"""
    vtk_vtkfielddata(;kwargs...)
    vtk_vtkfielddata(children::Any;kwargs...)
    vtk_vtkfielddata(children_maker::Function;kwargs...)


A VtkFieldData component.
VtkFieldData is exposing a vtkFieldData to a downstream element
It provides the following properties to its children:
  - pass along: 'view', 'representation`, `setProps`
  - `fields` == `vtkFieldData`
Keyword arguments:
- `children` (Array of a list of or a singular dash component, string or numbers | a list of or a singular dash component, string or number; optional): List of representation to show
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `view` (Dict; optional)
- `representation` (Dict; optional)
- `dataset` (Dict; optional)
"""
function vtk_vtkfielddata(; kwargs...)
        available_props = Symbol[:children, :id, :view, :representation, :dataset]
        wild_props = Symbol[]
        return Component("vtk_vtkfielddata", "VtkFieldData", "dash_vtk", available_props, wild_props; kwargs...)
end

vtk_vtkfielddata(children::Any; kwargs...) = vtk_vtkfielddata(;kwargs..., children = children)
vtk_vtkfielddata(children_maker::Function; kwargs...) = vtk_vtkfielddata(children_maker(); kwargs...)

