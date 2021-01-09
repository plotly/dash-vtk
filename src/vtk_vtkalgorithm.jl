# AUTO GENERATED FILE - DO NOT EDIT

export vtk_vtkalgorithm

"""
    vtk_vtkalgorithm(;kwargs...)
    vtk_vtkalgorithm(children::Any;kwargs...)
    vtk_vtkalgorithm(children_maker::Function;kwargs...)


A VtkAlgorithm component.
VtkAlgorithm is exposing a source or filter to a downstream filter
It takes the following set of properties:
  - vtkClass: vtkClassName
  - state: {}
Keyword arguments:
- `children` (Array of a list of or a singular dash component, string or numbers | a list of or a singular dash component, string or number; optional)
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `port` (Real; optional): downstream connection port
- `vtkClass` (String; optional): vtkClass name
- `state` (Dict; optional): set of property values for vtkClass
"""
function vtk_vtkalgorithm(; kwargs...)
        available_props = Symbol[:children, :id, :port, :vtkClass, :state]
        wild_props = Symbol[]
        return Component("vtk_vtkalgorithm", "VtkAlgorithm", "dash_vtk", available_props, wild_props; kwargs...)
end

vtk_vtkalgorithm(children::Any; kwargs...) = vtk_vtkalgorithm(;kwargs..., children = children)
vtk_vtkalgorithm(children_maker::Function; kwargs...) = vtk_vtkalgorithm(children_maker(); kwargs...)

