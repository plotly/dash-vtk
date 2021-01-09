# AUTO GENERATED FILE - DO NOT EDIT

export vtk_vtkreader

"""
    vtk_vtkreader(;kwargs...)
    vtk_vtkreader(children::Any;kwargs...)
    vtk_vtkreader(children_maker::Function;kwargs...)


A VtkReader component.
VtkReader is exposing a reader to a downstream filter
It takes the following set of properties:
  - vtkClass: vtk.js reader class name
  - url: string
  - parseAsText: string
  - parseAsArrayBuffer: base64String
Keyword arguments:
- `children` (Array of a list of or a singular dash component, string or numbers | a list of or a singular dash component, string or number; optional)
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `port` (Real; optional): downstream connection port
- `vtkClass` (String; optional): vtkClass name
- `url` (String; optional): set of url to fetch data from
- `parseAsText` (String; optional): set text data to process
- `parseAsArrayBuffer` (String; optional): set binary data to process from base64 string
- `renderOnUpdate` (Bool; optional): Automatically render on data loaded
- `resetCameraOnUpdate` (Bool; optional): Automatically reset camera on data loaded
"""
function vtk_vtkreader(; kwargs...)
        available_props = Symbol[:children, :id, :port, :vtkClass, :url, :parseAsText, :parseAsArrayBuffer, :renderOnUpdate, :resetCameraOnUpdate]
        wild_props = Symbol[]
        return Component("vtk_vtkreader", "VtkReader", "dash_vtk", available_props, wild_props; kwargs...)
end

vtk_vtkreader(children::Any; kwargs...) = vtk_vtkreader(;kwargs..., children = children)
vtk_vtkreader(children_maker::Function; kwargs...) = vtk_vtkreader(children_maker(); kwargs...)

