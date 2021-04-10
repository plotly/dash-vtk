# AUTO GENERATED FILE - DO NOT EDIT

export vtk_volumecontroller

"""
    vtk_volumecontroller(;kwargs...)

A VolumeController component.
VolumeController is a GUI to control the piecewise function
Keyword arguments:
- `id` (String; optional): The ID used to identify this component.
- `rescaleColorMap` (Bool; optional): Use opacity range to rescale color map
- `size` (Array of Reals; optional): Controller size in pixels
"""
function vtk_volumecontroller(; kwargs...)
        available_props = Symbol[:id, :rescaleColorMap, :size]
        wild_props = Symbol[]
        return Component("vtk_volumecontroller", "VolumeController", "dash_vtk", available_props, wild_props; kwargs...)
end

