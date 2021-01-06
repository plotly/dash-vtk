# AUTO GENERATED FILE - DO NOT EDIT

export functionalcomponent

"""
    functionalcomponent(;kwargs...)

A FunctionalComponent component.
Some arbitrary description
Keyword arguments:
- `id` (optional): The ID used to identify this component in Dash callbacks.
- `value` (optional): The value displayed in the input.
- `setProps` (optional): Dash-assigned callback that should be called to report property changes
to Dash, to make them available for callbacks.
- `n_clicks` (optional): Number of time button was clicked
"""
function functionalcomponent(; kwargs...)
        available_props = Symbol[:id, :value, :n_clicks]
        wild_props = Symbol[]
        return Component("functionalcomponent", "FunctionalComponent", "functional_component", available_props, wild_props; kwargs...)
end

