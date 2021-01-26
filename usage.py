import dash_vtk
import dash
from dash.dependencies import Input, Output
import dash_html_components as html

app = dash.Dash(__name__)
server = app.server

app.layout = html.Div(
    style={"width": "100%", "height": "calc(100vh - 16px)"},
    children=[
        dash_vtk.View(
            id="view",
            children=[
                dash_vtk.GeometryRepresentation(
                    [
                        dash_vtk.Algorithm(
                            vtkClass="vtkConeSource",
                            state={"resolution": 64, "capping": False,},
                        )
                    ]
                ),
                dash_vtk.GeometryRepresentation(
                    property={"color": [0.4, 0.4, 0.4],},
                    actor={"position": [0.5, 0.2, 0.4], "scale": [0.3, 0.3, 0.3],},
                    children=[
                        dash_vtk.Reader(
                            vtkClass="vtkOBJReader",
                            url="https://kitware.github.io/vtk-js-datasets/data/obj-mtl/star-wars-vader-tie-fighter.obj",
                        )
                    ],
                ),
                dash_vtk.GeometryRepresentation(
                    id="rep",
                    property={"pointSize": 10,},
                    colorDataRange=[0, 3],
                    mapper={
                        "colorByArrayName": "Temperature",
                        "scalarMode": 3,
                        "interpolateScalarsBeforeMapping": True,
                    },
                    children=[
                        dash_vtk.PolyData(
                            id="square",
                            points=[0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0],
                            polys=[4, 0, 1, 2, 3],
                            children=[
                                dash_vtk.PointData(
                                    children=[
                                        dash_vtk.DataArray(
                                            name="Temperature", values=[0, 3, 2, 1]
                                        )
                                    ]
                                )
                            ],
                        )
                    ],
                ),
            ],
        ),
        html.Div(id="output"),
    ],
)


if __name__ == "__main__":
    app.run_server(debug=True)
