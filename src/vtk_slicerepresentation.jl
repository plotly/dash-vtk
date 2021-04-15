# AUTO GENERATED FILE - DO NOT EDIT

export vtk_slicerepresentation

"""
    vtk_slicerepresentation(;kwargs...)
    vtk_slicerepresentation(children::Any;kwargs...)
    vtk_slicerepresentation(children_maker::Function;kwargs...)


A SliceRepresentation component.
SliceRepresentation is responsible to convert a vtkPolyData into rendering
It takes the following set of properties:
  - colorBy: ['POINTS', ''],
  - pointSize: 1,
  - color: [1,1,1],
Keyword arguments:
- `children` (Array of a list of or a singular dash component, string or numbers | a list of or a singular dash component, string or number; optional)
- `id` (String; optional): The ID used to identify this component.
- `actor` (Dict; optional): Properties to set to the slice/actor
- `colorDataRange` (Array of Reals | String; optional): Data range use for the colorMap
- `colorMapPreset` (String; optional): Preset name for the lookup table color map
- `iSlice` (Real; optional): index of the slice along i
- `jSlice` (Real; optional): index of the slice along j
- `kSlice` (Real; optional): index of the slice along k
- `mapper` (Dict; optional): Properties to set to the mapper
- `property` (Dict; optional): Properties to set to the volume.property
- `xSlice` (Real; optional): index of the slice along x
- `ySlice` (Real; optional): index of the slice along y
- `zSlice` (Real; optional): index of the slice along z
"""
function vtk_slicerepresentation(; kwargs...)
        available_props = Symbol[:children, :id, :actor, :colorDataRange, :colorMapPreset, :iSlice, :jSlice, :kSlice, :mapper, :property, :xSlice, :ySlice, :zSlice]
        wild_props = Symbol[]
        return Component("vtk_slicerepresentation", "SliceRepresentation", "dash_vtk", available_props, wild_props; kwargs...)
end

vtk_slicerepresentation(children::Any; kwargs...) = vtk_slicerepresentation(;kwargs..., children = children)
vtk_slicerepresentation(children_maker::Function; kwargs...) = vtk_slicerepresentation(children_maker(); kwargs...)

