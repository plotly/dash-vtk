# AUTO GENERATED FILE - DO NOT EDIT

export vtk_volumerepresentation

"""
    vtk_volumerepresentation(;kwargs...)
    vtk_volumerepresentation(children::Any;kwargs...)
    vtk_volumerepresentation(children_maker::Function;kwargs...)


A VolumeRepresentation component.
VolumeRepresentation is responsible to convert a vtkPolyData into rendering
It takes the following set of properties:
  - colorBy: ['POINTS', ''],
  - pointSize: 1,
  - color: [1,1,1],
Keyword arguments:
- `children` (Array of a list of or a singular dash component, string or numbers | a list of or a singular dash component, string or number; optional)
- `id` (String; optional): The ID used to identify this component.
- `colorDataRange` (Array of Reals | String; optional): Data range use for the colorMap
- `colorMapPreset` (String; optional): Preset name for the lookup table color map
- `mapper` (Dict; optional): Properties to set to the mapper
- `property` (Dict; optional): Properties to set to the volume.property
- `volume` (Dict; optional): Properties to set to the volume
"""
function vtk_volumerepresentation(; kwargs...)
        available_props = Symbol[:children, :id, :colorDataRange, :colorMapPreset, :mapper, :property, :volume]
        wild_props = Symbol[]
        return Component("vtk_volumerepresentation", "VolumeRepresentation", "dash_vtk", available_props, wild_props; kwargs...)
end

vtk_volumerepresentation(children::Any; kwargs...) = vtk_volumerepresentation(;kwargs..., children = children)
vtk_volumerepresentation(children_maker::Function; kwargs...) = vtk_volumerepresentation(children_maker(); kwargs...)

