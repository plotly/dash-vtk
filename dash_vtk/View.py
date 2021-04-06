# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class View(Component):
    """A View component.
View is responsible to render vtk.js data.
It takes the following set of properties:
  - `background`: [0.2, 0.3, 0.4]
  - `cameraPosition`: [0, 0, 1]
  - `cameraViewUp`: [0, 1, 0]
  - `cameraParallelProjection`: false

Keyword arguments:
- children (list of a list of or a singular dash component, string or numbers | a list of or a singular dash component, string or number; optional): List of representation to show
- id (string; optional): The ID used to identify this component.
- style (dict; default {
  width: '100%',
  height: '100%',
}): Allow user to override the default View style { width: '100%', height: '100%' }
- className (string; optional): Allow user to provide custom className associated to root element
- background (list; default [0.2, 0.3, 0.4]): The color of the view background using 3 floating numbers
between 0-1 of Red, Green, Blue component.
- interactorSettings (list; default [
  {
    button: 1,
    action: 'Rotate',
  },
  {
    button: 2,
    action: 'Pan',
  },
  {
    button: 3,
    action: 'Zoom',
    scrollEnabled: true,
  },
  {
    button: 1,
    action: 'Pan',
    shift: true,
  },
  {
    button: 1,
    action: 'Zoom',
    alt: true,
  },
  {
    button: 1,
    action: 'ZoomToMouse',
    control: true,
  },
  {
    button: 1,
    action: 'Roll',
    alt: true,
    shift: true,
  },
]): Configure the interactions
- cameraPosition (list; default [0, 0, 1]): Initial camera position from an object in [0,0,0]
- cameraViewUp (list; default [0, 1, 0]): Initial camera position from an object in [0,0,0]
- cameraParallelProjection (boolean; default False): Use parallel projection (default: false)
- triggerRender (number; default 0): Property use to trigger a render when changing.
- triggerResetCamera (number; default 0): Property use to trigger a resetCamera when changing.
- pickingModes (list of strings; optional): List of picking listeners to bind. The supported values are `click` and `hover`. By default it is disabled (empty array).
- clickInfo (dict; optional): Read-only prop. To use this, make sure that `pickingModes` contains `click`.
This prop is updated when an element in the map is clicked. This contains
the picking info describing the object being clicked on.
- hoverInfo (dict; optional): Read-only prop. To use this, make sure that `pickingModes` contains `hover`.
This prop is updated when an element in the map is hovered. This contains
the picking info describing the object being hovered."""
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, style=Component.UNDEFINED, className=Component.UNDEFINED, background=Component.UNDEFINED, interactorSettings=Component.UNDEFINED, cameraPosition=Component.UNDEFINED, cameraViewUp=Component.UNDEFINED, cameraParallelProjection=Component.UNDEFINED, triggerRender=Component.UNDEFINED, triggerResetCamera=Component.UNDEFINED, pickingModes=Component.UNDEFINED, clickInfo=Component.UNDEFINED, hoverInfo=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'style', 'className', 'background', 'interactorSettings', 'cameraPosition', 'cameraViewUp', 'cameraParallelProjection', 'triggerRender', 'triggerResetCamera', 'pickingModes', 'clickInfo', 'hoverInfo']
        self._type = 'View'
        self._namespace = 'dash_vtk'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'style', 'className', 'background', 'interactorSettings', 'cameraPosition', 'cameraViewUp', 'cameraParallelProjection', 'triggerRender', 'triggerResetCamera', 'pickingModes', 'clickInfo', 'hoverInfo']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(View, self).__init__(children=children, **args)
