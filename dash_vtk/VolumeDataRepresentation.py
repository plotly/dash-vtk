# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class VolumeDataRepresentation(Component):
    """A VolumeDataRepresentation component.
VolumneDataRepresentation expect the following set of properties
  - dimensions: [10, 20, 5]
  - spacing: [1, 1, 1]
  - origin: [0, 0, 0]
  - rgb: [...]
  - rgba: [...]
  - scalars: [...]
  - scalarsType: Float32Array

Keyword arguments:
- id (string; optional): The ID used to identify this component.
- dimensions (list of numbers; optional): Number of points along x, y, z
- spacing (list of numbers; optional): Spacing along x, y, z between points in world coordinates
- origin (list of numbers; optional): World coordinate of the lower left corner of your vtkImageData (i=0, j=0, k=0).
- rgb (list of numbers; optional): Use RGB values to attach to the points/vertex
- rgba (list of numbers; optional): Use RGBA values to attach to the points/vertex
- scalars (list of numbers; optional): Field values to attach to the points
- scalarsType (string; default 'Float32Array'): Types of numbers provided in scalars
- mapper (dict; optional): Properties to set to the mapper
- volume (dict; optional): Properties to set to the volume
- property (dict; optional): Properties to set to the volume.property
- colorMapPreset (string; default 'erdc_rainbow_bright'): Preset name for the lookup table color map
- volumeController (boolean; default True): Show volumeController
- controllerSize (list of numbers; default [400, 150]): Controller size in pixels
- rescaleColorMap (boolean; default True): Use opacity range to rescale color map
- colorDataRange (list of numbers | string; default 'auto'): Data range use for the colorMap"""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, dimensions=Component.UNDEFINED, spacing=Component.UNDEFINED, origin=Component.UNDEFINED, rgb=Component.UNDEFINED, rgba=Component.UNDEFINED, scalars=Component.UNDEFINED, scalarsType=Component.UNDEFINED, mapper=Component.UNDEFINED, volume=Component.UNDEFINED, property=Component.UNDEFINED, colorMapPreset=Component.UNDEFINED, volumeController=Component.UNDEFINED, controllerSize=Component.UNDEFINED, rescaleColorMap=Component.UNDEFINED, colorDataRange=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'dimensions', 'spacing', 'origin', 'rgb', 'rgba', 'scalars', 'scalarsType', 'mapper', 'volume', 'property', 'colorMapPreset', 'volumeController', 'controllerSize', 'rescaleColorMap', 'colorDataRange']
        self._type = 'VolumeDataRepresentation'
        self._namespace = 'dash_vtk'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'dimensions', 'spacing', 'origin', 'rgb', 'rgba', 'scalars', 'scalarsType', 'mapper', 'volume', 'property', 'colorMapPreset', 'volumeController', 'controllerSize', 'rescaleColorMap', 'colorDataRange']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(VolumeDataRepresentation, self).__init__(**args)
