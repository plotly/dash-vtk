# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Reader(Component):
    """A Reader component.
Reader is exposing a reader to a downstream filter
It takes the following set of properties:
  - vtkClass: vtk.js reader class name
  - url: string
  - parseAsText: string
  - parseAsArrayBuffer: base64String

Keyword arguments:

- children (list of a list of or a singular dash component, string or numbers | a list of or a singular dash component, string or number; optional)

- id (string; optional):
    The ID used to identify this component.

- parseAsArrayBuffer (string; optional):
    set binary data to process from base64 string.

- parseAsText (string; optional):
    set text data to process.

- port (number; default 0):
    downstream connection port.

- renderOnUpdate (boolean; default True):
    Automatically render on data loaded.

- resetCameraOnUpdate (boolean; default True):
    Automatically reset camera on data loaded.

- url (string; optional):
    set of url to fetch data from.

- vtkClass (string; default ''):
    vtkClass name."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'dash_vtk'
    _type = 'Reader'
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, port=Component.UNDEFINED, vtkClass=Component.UNDEFINED, url=Component.UNDEFINED, parseAsText=Component.UNDEFINED, parseAsArrayBuffer=Component.UNDEFINED, renderOnUpdate=Component.UNDEFINED, resetCameraOnUpdate=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'parseAsArrayBuffer', 'parseAsText', 'port', 'renderOnUpdate', 'resetCameraOnUpdate', 'url', 'vtkClass']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'parseAsArrayBuffer', 'parseAsText', 'port', 'renderOnUpdate', 'resetCameraOnUpdate', 'url', 'vtkClass']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(Reader, self).__init__(children=children, **args)
