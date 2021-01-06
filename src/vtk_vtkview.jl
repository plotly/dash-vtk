# AUTO GENERATED FILE - DO NOT EDIT

export vtk_vtkview

"""
    vtk_vtkview(;kwargs...)
    vtk_vtkview(children::Any;kwargs...)
    vtk_vtkview(children_maker::Function;kwargs...)


A VtkView component.
VtkView is responsible to render vtk.js data.
It takes the following set of properties:
  - `background`:
Keyword arguments:
- `children` (Array of a list of or a singular dash component, string or numbers | a list of or a singular dash component, string or number; optional): List of representation to show
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `background` (Array; optional): The color of the view background using 3 floating numbers
between 0-1 of Red, Green, Blue component.
"""
function vtk_vtkview(; kwargs...)
        available_props = Symbol[:children, :id, :background]
        wild_props = Symbol[]
        return Component("vtk_vtkview", "VtkView", "dash_vtk", available_props, wild_props; kwargs...)
end

vtk_vtkview(children::Any; kwargs...) = vtk_vtkview(;kwargs..., children = children)
vtk_vtkview(children_maker::Function; kwargs...) = vtk_vtkview(children_maker(); kwargs...)

