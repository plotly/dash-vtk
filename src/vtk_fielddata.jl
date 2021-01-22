# AUTO GENERATED FILE - DO NOT EDIT

export vtk_fielddata

"""
    vtk_fielddata(;kwargs...)
    vtk_fielddata(children::Any;kwargs...)
    vtk_fielddata(children_maker::Function;kwargs...)


A FieldData component.
FieldData is exposing a FieldData to a downstream element
Keyword arguments:
- `children` (Array of a list of or a singular dash component, string or numbers | a list of or a singular dash component, string or number; optional)
"""
function vtk_fielddata(; kwargs...)
        available_props = Symbol[:children]
        wild_props = Symbol[]
        return Component("vtk_fielddata", "FieldData", "dash_vtk", available_props, wild_props; kwargs...)
end

vtk_fielddata(children::Any; kwargs...) = vtk_fielddata(;kwargs..., children = children)
vtk_fielddata(children_maker::Function; kwargs...) = vtk_fielddata(children_maker(); kwargs...)

