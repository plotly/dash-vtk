# AUTO GENERATED FILE - DO NOT EDIT

export vtk_volumedatarepresentation

"""
    vtk_volumedatarepresentation(;kwargs...)

A VolumeDataRepresentation component.
VolumneDataRepresentation expect the following set of properties
  - dimensions: [10, 20, 5]
  - spacing: [1, 1, 1]
  - origin: [0, 0, 0]
  - rgb: [...]
  - rgba: [...]
  - scalars: [...]
  - scalarsType: Float32Array
Keyword arguments:
- `dimensions` (Array of Reals; optional): Number of points along x, y, z
- `spacing` (Array of Reals; optional): Spacing along x, y, z between points in world coordinates
- `origin` (Array of Reals; optional): World coordinate of the lower left corner of your vtkImageData (i=0, j=0, k=0).
- `rgb` (Array of Reals; optional): Use RGB values to attach to the points/vertex
- `rgba` (Array of Reals; optional): Use RGBA values to attach to the points/vertex
- `scalars` (Array of Reals; optional): Field values to attach to the points
- `scalarsType` (String; optional): Types of numbers provided in scalars
- `mapper` (Dict; optional): Properties to set to the mapper
- `volume` (Dict; optional): Properties to set to the volume
- `property` (Dict; optional): Properties to set to the volume.property
- `colorMapPreset` (String; optional): Preset name for the lookup table color map
- `volumeController` (Bool; optional): Show volumeController
- `controllerSize` (Array of Reals; optional): Controller size in pixels
- `rescaleColorMap` (Bool; optional): Use opacity range to rescale color map
- `colorDataRange` (Array of Reals | String; optional): Data range use for the colorMap
"""
function vtk_volumedatarepresentation(; kwargs...)
        available_props = Symbol[:dimensions, :spacing, :origin, :rgb, :rgba, :scalars, :scalarsType, :mapper, :volume, :property, :colorMapPreset, :volumeController, :controllerSize, :rescaleColorMap, :colorDataRange]
        wild_props = Symbol[]
        return Component("vtk_volumedatarepresentation", "VolumeDataRepresentation", "dash_vtk", available_props, wild_props; kwargs...)
end

