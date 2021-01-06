import functional_component
import dash
from dash.dependencies import Input, Output
import dash_html_components as html

app = dash.Dash(__name__)

app.layout = html.Div([
    functional_component.FunctionalComponent(
        id='fc',
    ),
    html.Div(id='output')
])


@app.callback(Output('output', 'children'), [Input('fc', 'n_clicks')])
def display_output(n_clicks):
    print("n_clicks =", n_clicks)
    
    return dash.no_update
    


if __name__ == '__main__':
    app.run_server(debug=True)
