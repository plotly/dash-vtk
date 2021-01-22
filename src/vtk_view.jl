# AUTO GENERATED FILE - DO NOT EDIT

export vtk_view

"""
    vtk_view(;kwargs...)
    vtk_view(children::Any;kwargs...)
    vtk_view(children_maker::Function;kwargs...)


A View component.
View is responsible to render vtk.js data.
It takes the following set of properties:
  - `background`: [0.2, 0.3, 0.4]
  - `cameraPosition`: [0, 0, 1]
  - `cameraViewUp`: [0, 1, 0]
  - `cameraParallelProjection`: false
Keyword arguments:
- `children` (Array of a list of or a singular dash component, string or numbers | a list of or a singular dash component, string or number; optional): List of representation to show
- `id` (String; optional): The ID used to identify this component.
- `background` (Array; optional): The color of the view background using 3 floating numbers
between 0-1 of Red, Green, Blue component.
- `interactorSettings` (Array; optional): Configure the interactions
- `cameraPosition` (Array; optional): Initial camera position from an object in [0,0,0]
- `cameraViewUp` (Array; optional): Initial camera position from an object in [0,0,0]
- `cameraParallelProjection` (Bool; optional): Use parallel projection (default: false)
"""
function vtk_view(; kwargs...)
        available_props = Symbol[:children, :id, :background, :interactorSettings, :cameraPosition, :cameraViewUp, :cameraParallelProjection]
        wild_props = Symbol[]
        return Component("vtk_view", "View", "dash_vtk", available_props, wild_props; kwargs...)
end

vtk_view(children::Any; kwargs...) = vtk_view(;kwargs..., children = children)
vtk_view(children_maker::Function; kwargs...) = vtk_view(children_maker(); kwargs...)

