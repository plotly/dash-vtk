import dash
import dash_vtk
import dash_html_components as html

app = dash.Dash(__name__)
server = app.server

app.layout = html.Div(
    style={"width": "100%", "height": "calc(100vh - 16px)"},
    children=dash_vtk.View([
        dash_vtk.GeometryRepresentation([
            dash_vtk.Algorithm(
                vtkClass="vtkConeSource",
                state={"resolution": 64, "capping": False},
            )
        ]),
    ]),
)

if __name__ == "__main__":
    app.run_server(debug=True)