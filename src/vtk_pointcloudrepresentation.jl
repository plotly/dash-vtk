# AUTO GENERATED FILE - DO NOT EDIT

export vtk_pointcloudrepresentation

"""
    vtk_pointcloudrepresentation(;kwargs...)

A PointCloudRepresentation component.
PointCloudRepresentation expect the following set of properties
  - xyz: [x0, y0, z0, x1, ..., zn]
  - rgb: [...]
  - rgba: [...]
  - scalars: [...]
Keyword arguments:
- `colorDataRange` (Array of Reals; optional): Data range use for the colorMap
- `colorMapPreset` (String; optional): Preset name for the lookup table color map
- `property` (Dict; optional): Properties to set to the actor.property
- `rgb` (Array of Reals; optional): Use RGB values to attach to the points/vertex
- `rgba` (Array of Reals; optional): Use RGBA values to attach to the points/vertex
- `scalars` (Array of Reals; optional): Field values to attach to the points
- `xyz` (Array of Reals; optional): Points coordinates
"""
function vtk_pointcloudrepresentation(; kwargs...)
        available_props = Symbol[:colorDataRange, :colorMapPreset, :property, :rgb, :rgba, :scalars, :xyz]
        wild_props = Symbol[]
        return Component("vtk_pointcloudrepresentation", "PointCloudRepresentation", "dash_vtk", available_props, wild_props; kwargs...)
end

