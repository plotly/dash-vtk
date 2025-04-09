# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class PointCloudRepresentation(Component):
    """A PointCloudRepresentation component.
PointCloudRepresentation expect the following set of properties
  - xyz: [x0, y0, z0, x1, ..., zn]
  - rgb: [...]
  - rgba: [...]
  - scalars: [...]

Keyword arguments:

- id (string; optional):
    The ID used to identify this component.

- colorDataRange (list of numbers; default [0, 1]):
    Data range use for the colorMap.

- colorMapPreset (string; default 'erdc_rainbow_bright'):
    Preset name for the lookup table color map.

- cubeAxesStyle (dict; optional):
    Configure cube Axes style by overriding the set of properties
    defined
    https://github.com/Kitware/vtk-js/blob/HEAD/Sources/Rendering/Core/CubeAxesActor/index.js#L703-L719.

- property (dict; optional):
    Properties to set to the actor.property.

- rgb (list of numbers; optional):
    Use RGB values to attach to the points/vertex.

- rgba (list of numbers; optional):
    Use RGBA values to attach to the points/vertex.

- scalarBarStyle (dict; optional):
    Configure scalar bar style by overriding the set of properties
    defined
    https://github.com/Kitware/vtk-js/blob/master/Sources/Rendering/Core/ScalarBarActor/index.js#L776-L796.

- scalarBarTitle (string; default ''):
    Use given string as title for scalar bar. By default it is empty
    (no title).

- scalars (list of numbers; optional):
    Field values to attach to the points.

- showCubeAxes (boolean; default False):
    Show/Hide Cube Axes for the given representation.

- showScalarBar (boolean; default False):
    Show hide scalar bar for that representation.

- xyz (list of numbers; default [0, 0, 0]):
    Points coordinates."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'dash_vtk'
    _type = 'PointCloudRepresentation'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, xyz=Component.UNDEFINED, rgb=Component.UNDEFINED, rgba=Component.UNDEFINED, scalars=Component.UNDEFINED, colorMapPreset=Component.UNDEFINED, colorDataRange=Component.UNDEFINED, property=Component.UNDEFINED, showCubeAxes=Component.UNDEFINED, cubeAxesStyle=Component.UNDEFINED, showScalarBar=Component.UNDEFINED, scalarBarTitle=Component.UNDEFINED, scalarBarStyle=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'colorDataRange', 'colorMapPreset', 'cubeAxesStyle', 'property', 'rgb', 'rgba', 'scalarBarStyle', 'scalarBarTitle', 'scalars', 'showCubeAxes', 'showScalarBar', 'xyz']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'colorDataRange', 'colorMapPreset', 'cubeAxesStyle', 'property', 'rgb', 'rgba', 'scalarBarStyle', 'scalarBarTitle', 'scalars', 'showCubeAxes', 'showScalarBar', 'xyz']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(PointCloudRepresentation, self).__init__(**args)
