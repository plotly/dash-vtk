# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class ShareDataSet(Component):
    """A ShareDataSet component.
ShareDataSet capture a dataset or a source and allow it to use it in another
pipeline or representation.

Keyword arguments:

- children (list of a list of or a singular dash component, string or numbers | a list of or a singular dash component, string or number; optional)

- id (string; optional):
    The ID used to identify this component.

- name (string; default 'shared'):
    Unique dataset name to cross reference.

- port (number; default 0):
    downstream connection port."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'dash_vtk'
    _type = 'ShareDataSet'
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, port=Component.UNDEFINED, name=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'name', 'port']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'name', 'port']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(ShareDataSet, self).__init__(children=children, **args)
