import dash_vtk
import dash
from dash.dependencies import Input, Output
import dash_html_components as html

app = dash.Dash(__name__)
server = app.server

app.layout = html.Div(
    style={"width": "100%", "height": "calc(100vh - 16px)"},
    children=[dash_vtk.View(id="view",), html.Div(id="output"),],
)


if __name__ == "__main__":
    app.run_server(debug=True)
