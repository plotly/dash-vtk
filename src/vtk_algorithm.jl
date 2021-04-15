# AUTO GENERATED FILE - DO NOT EDIT

export vtk_algorithm

"""
    vtk_algorithm(;kwargs...)
    vtk_algorithm(children::Any;kwargs...)
    vtk_algorithm(children_maker::Function;kwargs...)


An Algorithm component.
Algorithm is exposing a source or filter to a downstream filter
It takes the following set of properties:
  - vtkClass: vtkClassName
  - state: {}
Keyword arguments:
- `children` (Array of a list of or a singular dash component, string or numbers | a list of or a singular dash component, string or number; optional)
- `id` (String; optional): The ID used to identify this component.
- `port` (Real; optional): downstream connection port
- `state` (Dict; optional): set of property values for vtkClass
- `vtkClass` (String; optional): vtkClass name
"""
function vtk_algorithm(; kwargs...)
        available_props = Symbol[:children, :id, :port, :state, :vtkClass]
        wild_props = Symbol[]
        return Component("vtk_algorithm", "Algorithm", "dash_vtk", available_props, wild_props; kwargs...)
end

vtk_algorithm(children::Any; kwargs...) = vtk_algorithm(;kwargs..., children = children)
vtk_algorithm(children_maker::Function; kwargs...) = vtk_algorithm(children_maker(); kwargs...)

