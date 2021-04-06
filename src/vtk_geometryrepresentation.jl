# AUTO GENERATED FILE - DO NOT EDIT

export vtk_geometryrepresentation

"""
    vtk_geometryrepresentation(;kwargs...)
    vtk_geometryrepresentation(children::Any;kwargs...)
    vtk_geometryrepresentation(children_maker::Function;kwargs...)


A GeometryRepresentation component.
GeometryRepresentation is responsible to convert a vtkPolyData into rendering
It takes the following set of properties:
  - actor: Properties to assign to the vtkActor
  - mapper: Properties to assign to the vtkMapper
  - property: Properties to assign to the vtkProperty (actor.getProperty())
  - colorMapPreset: Name of the preset to use for controlling the color mapping
  - colorDataRange: Range to use for the color scale
Keyword arguments:
- `children` (Array of a list of or a singular dash component, string or numbers | a list of or a singular dash component, string or number; optional)
- `id` (String; optional): The ID used to identify this component.
- `actor` (Dict; optional): Properties to set to the actor
- `mapper` (Dict; optional): Properties to set to the actor
- `property` (Dict; optional): Properties to set to the actor.property
- `colorMapPreset` (String; optional): Preset name for the lookup table color map
- `colorDataRange` (Array of Reals; optional): Data range use for the colorMap
- `showCubeAxes` (Bool; optional): Show/Hide Cube Axes for the given representation
- `cubeAxesStyle` (Dict; optional): Configure cube Axes style by overriding the set of properties defined
https://github.com/Kitware/vtk-js/blob/HEAD/Sources/Rendering/Core/CubeAxesActor/index.js#L703-L719
"""
function vtk_geometryrepresentation(; kwargs...)
        available_props = Symbol[:children, :id, :actor, :mapper, :property, :colorMapPreset, :colorDataRange, :showCubeAxes, :cubeAxesStyle]
        wild_props = Symbol[]
        return Component("vtk_geometryrepresentation", "GeometryRepresentation", "dash_vtk", available_props, wild_props; kwargs...)
end

vtk_geometryrepresentation(children::Any; kwargs...) = vtk_geometryrepresentation(;kwargs..., children = children)
vtk_geometryrepresentation(children_maker::Function; kwargs...) = vtk_geometryrepresentation(children_maker(); kwargs...)

