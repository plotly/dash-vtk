# AUTO GENERATED FILE - DO NOT EDIT

export vtk_calculator

"""
    vtk_calculator(;kwargs...)
    vtk_calculator(children::Any;kwargs...)
    vtk_calculator(children_maker::Function;kwargs...)


A Calculator component.
Calculator is exposing a source or filter to a downstream filter
It takes the following set of properties:
  - name: 'scalars'    // name of the generated field
  - location: 'POINT'  // POINT/CELL
  - arrays: []         // Name of array to have access in formula
  - formula: fn
Keyword arguments:
- `children` (Array of a list of or a singular dash component, string or numbers | a list of or a singular dash component, string or number; optional)
- `id` (String; optional): The ID used to identify this component.
- `arrays` (Array of Strings; optional): List of fields you want available for your formula
- `location` (String; optional): Field location [POINT, CELL, COORDINATE, SCALARS, ]
- `name` (String; optional): Field name
- `port` (Real; optional): downstream connection port
"""
function vtk_calculator(; kwargs...)
        available_props = Symbol[:children, :id, :arrays, :location, :name, :port]
        wild_props = Symbol[]
        return Component("vtk_calculator", "Calculator", "dash_vtk", available_props, wild_props; kwargs...)
end

vtk_calculator(children::Any; kwargs...) = vtk_calculator(;kwargs..., children = children)
vtk_calculator(children_maker::Function; kwargs...) = vtk_calculator(children_maker(); kwargs...)

