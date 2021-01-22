# AUTO GENERATED FILE - DO NOT EDIT

export vtk_pointdata

"""
    vtk_pointdata(;kwargs...)
    vtk_pointdata(children::Any;kwargs...)
    vtk_pointdata(children_maker::Function;kwargs...)


A PointData component.
PointData is exposing a vtkPointData to a downstream element
Keyword arguments:
- `children` (Array of a list of or a singular dash component, string or numbers | a list of or a singular dash component, string or number; optional)
"""
function vtk_pointdata(; kwargs...)
        available_props = Symbol[:children]
        wild_props = Symbol[]
        return Component("vtk_pointdata", "PointData", "dash_vtk", available_props, wild_props; kwargs...)
end

vtk_pointdata(children::Any; kwargs...) = vtk_pointdata(;kwargs..., children = children)
vtk_pointdata(children_maker::Function; kwargs...) = vtk_pointdata(children_maker(); kwargs...)

