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
- `style` (Dict; optional): Allow user to override the default View style { width: '100%', height: '100%' }
- `className` (String; optional): Allow user to provide custom className associated to root element
- `background` (Array; optional): The color of the view background using 3 floating numbers
between 0-1 of Red, Green, Blue component.
- `interactorSettings` (Array; optional): Configure the interactions
- `cameraPosition` (Array; optional): Initial camera position from an object in [0,0,0]
- `cameraViewUp` (Array; optional): Initial camera position from an object in [0,0,0]
- `cameraParallelProjection` (Bool; optional): Use parallel projection (default: false)
- `triggerRender` (Real; optional): Property use to trigger a render when changing.
- `triggerResetCamera` (Real; optional): Property use to trigger a resetCamera when changing.
- `pickingModes` (Array of Strings; optional): List of picking listeners to bind. The supported values are `click` and `hover`. By default it is disabled (empty array).
- `clickInfo` (Dict; optional): Read-only prop. To use this, make sure that `pickingModes` contains `click`.
This prop is updated when an element in the map is clicked. This contains
the picking info describing the object being clicked on.
- `hoverInfo` (Dict; optional): Read-only prop. To use this, make sure that `pickingModes` contains `hover`.
This prop is updated when an element in the map is hovered. This contains
the picking info describing the object being hovered.
"""
function vtk_view(; kwargs...)
        available_props = Symbol[:children, :id, :style, :className, :background, :interactorSettings, :cameraPosition, :cameraViewUp, :cameraParallelProjection, :triggerRender, :triggerResetCamera, :pickingModes, :clickInfo, :hoverInfo]
        wild_props = Symbol[]
        return Component("vtk_view", "View", "dash_vtk", available_props, wild_props; kwargs...)
end

vtk_view(children::Any; kwargs...) = vtk_view(;kwargs..., children = children)
vtk_view(children_maker::Function; kwargs...) = vtk_view(children_maker(); kwargs...)

