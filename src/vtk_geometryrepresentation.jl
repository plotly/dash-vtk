# AUTO GENERATED FILE - DO NOT EDIT

export vtk_geometryrepresentation

"""
    vtk_geometryrepresentation(;kwargs...)
    vtk_geometryrepresentation(children::Any;kwargs...)
    vtk_geometryrepresentation(children_maker::Function;kwargs...)


A GeometryRepresentation component.
GeometryRepresentation is responsible to convert a vtkPolyData into rendering
It takes the following set of properties:
  - colorBy: ['POINTS', ''],
  - pointSize: 1,
  - color: [1,1,1],
Keyword arguments:
- `children` (Array of a list of or a singular dash component, string or numbers | a list of or a singular dash component, string or number; optional)
- `id` (String; optional): The ID used to identify this component.
- `actor` (Dict; optional): Properties to set to the actor
- `mapper` (Dict; optional): Properties to set to the actor
- `property` (Dict; optional): Properties to set to the actor.property
- `colorMapPreset` (String; optional): Preset name for the lookup table color map
- `colorDataRange` (Array of Reals; optional): Data range use for the colorMap
"""
function vtk_geometryrepresentation(; kwargs...)
        available_props = Symbol[:children, :id, :actor, :mapper, :property, :colorMapPreset, :colorDataRange]
        wild_props = Symbol[]
        return Component("vtk_geometryrepresentation", "GeometryRepresentation", "dash_vtk", available_props, wild_props; kwargs...)
end

vtk_geometryrepresentation(children::Any; kwargs...) = vtk_geometryrepresentation(;kwargs..., children = children)
vtk_geometryrepresentation(children_maker::Function; kwargs...) = vtk_geometryrepresentation(children_maker(); kwargs...)

