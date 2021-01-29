# AUTO GENERATED FILE - DO NOT EDIT

export vtk_volume

"""
    vtk_volume(;kwargs...)

A Volume component.
Volume is exposing a vtkImageData to a downstream filter
It takes the following set of properties:
  - state: { image: { ...imagedata-props }, field: { ...dataArray } }
Keyword arguments:
- `id` (String; optional): The ID used to identify this component.
- `port` (Real; optional): downstream connection port
- `state` (Dict; optional): State of the volume
"""
function vtk_volume(; kwargs...)
        available_props = Symbol[:id, :port, :state]
        wild_props = Symbol[]
        return Component("vtk_volume", "Volume", "dash_vtk", available_props, wild_props; kwargs...)
end

