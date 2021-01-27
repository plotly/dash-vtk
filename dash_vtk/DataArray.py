# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class DataArray(Component):
    """A DataArray component.
DataArray is creating a vtkDataArray for the container fields
It takes the following set of properties:
  - type: 'Float32Array', 'Float64Array', 'Uint16Array', ...
  - values: [number, number, ...]
  - numberOfComponents: 1,
  - registration: 'addArray', 'setScalars', ...

Keyword arguments:
- id (string; optional): The ID used to identify this component.
- type (string; default 'Float32Array'): Typed array name
- name (string; default 'scalars'): Field name
- values (list of numbers; optional): Actual values to use inside our array
- numberOfComponents (number; default 1): Number of components / Tuple size
- registration (string; default 'addArray'): Name of the method to call on the fieldData (addArray, setScalars, setVectors...)"""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, type=Component.UNDEFINED, name=Component.UNDEFINED, values=Component.UNDEFINED, numberOfComponents=Component.UNDEFINED, registration=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'type', 'name', 'values', 'numberOfComponents', 'registration']
        self._type = 'DataArray'
        self._namespace = 'dash_vtk'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'type', 'name', 'values', 'numberOfComponents', 'registration']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(DataArray, self).__init__(**args)
