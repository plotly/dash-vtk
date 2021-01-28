import dash
import dash_vtk
import dash_html_components as html

data_url = "https://data.kitware.com/api/v1/item/59e12e988d777f31ac6455c5/download"

app = dash.Dash(__name__)
server = app.server

app.layout = html.Div(
    style={"height": "calc(100vh - 30px)", "width": "100%",},
    children=[
        dash_vtk.View(
            dash_vtk.VolumeRepresentation(
                children=[
                    dash_vtk.VolumeController(),
                    dash_vtk.Reader(vtkClass="vtkXMLImageDataReader", url=data_url),
                ]
            )
        )
    ],
)

if __name__ == "__main__":
    app.run_server(debug=True)
