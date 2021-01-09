# AUTO GENERATED FILE - DO NOT EDIT

export vtk_vtkdataarray

"""
    vtk_vtkdataarray(;kwargs...)

A VtkDataArray component.
VtkDataArray is creating a vtkDataArray for the container fields
It takes the following set of properties:
  - type: 'Float32Array', 'Float64Array', 'Uint16Array', ...
  - values: [number, number, ...]
  - numberOfComponents: 1,
  - registration: 'addArray', 'setScalars', ...
Keyword arguments:
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `type` (String; optional): Typed array name
- `name` (String; optional): Field name
- `values` (Array of Reals; optional): Actual values to use inside our array
- `numberOfComponents` (Real; optional): Number of components / Tuple size
- `registration` (String; optional): Name of the method to call on the fieldData (addArray, setScalars, setVectors...)
"""
function vtk_vtkdataarray(; kwargs...)
        available_props = Symbol[:id, :type, :name, :values, :numberOfComponents, :registration]
        wild_props = Symbol[]
        return Component("vtk_vtkdataarray", "VtkDataArray", "dash_vtk", available_props, wild_props; kwargs...)
end

