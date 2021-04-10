# AUTO GENERATED FILE - DO NOT EDIT

export vtk_volumedatarepresentation

"""
    vtk_volumedatarepresentation(;kwargs...)

A VolumeDataRepresentation component.
VolumeDataRepresentation expect the following set of properties
  - dimensions: [10, 20, 5]
  - spacing: [1, 1, 1]
  - origin: [0, 0, 0]
  - rgb: [...]
  - rgba: [...]
  - scalars: [...]
  - scalarsType: Float32Array
Keyword arguments:
- `id` (String; optional): The ID used to identify this component.
- `colorDataRange` (Array of Reals | String; optional): Data range use for the colorMap
- `colorMapPreset` (String; optional): Preset name for the lookup table color map
- `controllerSize` (Array of Reals; optional): Controller size in pixels
- `dimensions` (Array of Reals; optional): Number of points along x, y, z
- `mapper` (Dict; optional): Properties to set to the mapper
- `origin` (Array of Reals; optional): World coordinate of the lower left corner of your vtkImageData (i=0, j=0, k=0).
- `property` (Dict; optional): Properties to set to the volume.property
- `rescaleColorMap` (Bool; optional): Use opacity range to rescale color map
- `rgb` (Array of Reals; optional): Use RGB values to attach to the points/vertex
- `rgba` (Array of Reals; optional): Use RGBA values to attach to the points/vertex
- `scalars` (Array of Reals; optional): Field values to attach to the points
- `scalarsType` (String; optional): Types of numbers provided in scalars
- `spacing` (Array of Reals; optional): Spacing along x, y, z between points in world coordinates
- `volume` (Dict; optional): Properties to set to the volume
- `volumeController` (Bool; optional): Show volumeController
"""
function vtk_volumedatarepresentation(; kwargs...)
        available_props = Symbol[:id, :colorDataRange, :colorMapPreset, :controllerSize, :dimensions, :mapper, :origin, :property, :rescaleColorMap, :rgb, :rgba, :scalars, :scalarsType, :spacing, :volume, :volumeController]
        wild_props = Symbol[]
        return Component("vtk_volumedatarepresentation", "VolumeDataRepresentation", "dash_vtk", available_props, wild_props; kwargs...)
end

