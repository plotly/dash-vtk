# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class FunctionalComponent(Component):
    """A FunctionalComponent component.
Some arbitrary description

Keyword arguments:
- id (optional): The ID used to identify this component in Dash callbacks.
- value (optional): The value displayed in the input.
- setProps (optional): Dash-assigned callback that should be called to report property changes
to Dash, to make them available for callbacks.
- n_clicks (default 0): Number of time button was clicked"""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, value=Component.UNDEFINED, n_clicks=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'value', 'setProps', 'n_clicks']
        self._type = 'FunctionalComponent'
        self._namespace = 'functional_component'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'value', 'setProps', 'n_clicks']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(FunctionalComponent, self).__init__(**args)
