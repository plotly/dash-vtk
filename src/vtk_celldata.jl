# AUTO GENERATED FILE - DO NOT EDIT

export vtk_celldata

"""
    vtk_celldata(;kwargs...)
    vtk_celldata(children::Any;kwargs...)
    vtk_celldata(children_maker::Function;kwargs...)


A CellData component.
CellData is exposing a vtkCellData to a downstream element
Keyword arguments:
- `children` (Array of a list of or a singular dash component, string or numbers | a list of or a singular dash component, string or number; optional)
"""
function vtk_celldata(; kwargs...)
        available_props = Symbol[:children]
        wild_props = Symbol[]
        return Component("vtk_celldata", "CellData", "dash_vtk", available_props, wild_props; kwargs...)
end

vtk_celldata(children::Any; kwargs...) = vtk_celldata(;kwargs..., children = children)
vtk_celldata(children_maker::Function; kwargs...) = vtk_celldata(children_maker(); kwargs...)

