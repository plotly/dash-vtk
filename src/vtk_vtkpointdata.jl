# AUTO GENERATED FILE - DO NOT EDIT

export vtk_vtkpointdata

"""
    vtk_vtkpointdata(;kwargs...)
    vtk_vtkpointdata(children::Any;kwargs...)
    vtk_vtkpointdata(children_maker::Function;kwargs...)


A VtkPointData component.
VtkPointData is exposing a vtkPointData to a downstream element
Keyword arguments:
- `children` (Array of a list of or a singular dash component, string or numbers | a list of or a singular dash component, string or number; optional): List of representation to show
"""
function vtk_vtkpointdata(; kwargs...)
        available_props = Symbol[:children]
        wild_props = Symbol[]
        return Component("vtk_vtkpointdata", "VtkPointData", "dash_vtk", available_props, wild_props; kwargs...)
end

vtk_vtkpointdata(children::Any; kwargs...) = vtk_vtkpointdata(;kwargs..., children = children)
vtk_vtkpointdata(children_maker::Function; kwargs...) = vtk_vtkpointdata(children_maker(); kwargs...)

