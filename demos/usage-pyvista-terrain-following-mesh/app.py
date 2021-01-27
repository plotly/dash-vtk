import dash
import dash_vtk
import dash_bootstrap_components as dbc
import dash_html_components as html
import dash_core_components as dcc
from dash.dependencies import Input, Output, State

import numpy as np
import pyvista as pv
from pyvista import examples
from vtk.util.numpy_support import vtk_to_numpy

from color_maps import presets

def toDropMenu(name):
    return dbc.DropdownMenuItem(name)

# Get point cloud data from PyVista
uniformGrid = examples.download_crater_topo()
subset = uniformGrid.extract_subset((500, 900, 400, 800, 0, 0), (5, 5, 1))
terrain = subset.warp_by_scalar()
polydata = terrain.extract_geometry()
polys = vtk_to_numpy(polydata.GetPolys().GetData())
elevation = polydata['scalar1of1']
min_elevation = np.amin(elevation)
max_elevation = np.amax(elevation)

# Setup VTK rendering of PointCloud
app = dash.Dash(__name__, external_stylesheets=[dbc.themes.BOOTSTRAP])
server = app.server

vtk_view = dash_vtk.View(
    [
        dash_vtk.GeometryRepresentation(
            id="vtk-representation",
            children=[
                dash_vtk.PolyData(
                    points=polydata.points.ravel(),
                    polys=polys,
                    children=[
                        dash_vtk.PointData([
                            dash_vtk.DataArray(
                                registration="setScalars",
                                name="elevation",
                                values=elevation,
                            )
                        ])
                    ]
                )
            ],
            colorMapPreset="erdc_blue2green_muted",
            colorDataRange=[min_elevation, max_elevation],
            property={
                'edgeVisibility': True,
            },
        )
    ]
)

app.layout = dbc.Container(
    fluid=True,
    children=[
        dbc.Row(
            [
                dbc.Col(
                    width=10,
                    children=[
                        html.H1("Demo of dash_vtk.PolyData"),
                    ]
                ),
                dbc.Col(
                    width=2,
                    children=[
                        dbc.DropdownMenu(
                            id="dropdown-preset",
                            label="ColorMap",
                            children=list(map(toDropMenu, presets)),
                        ),
                    ]
                ),
            ]
        ),
        html.Hr(),
        dbc.Row(
            [
                dbc.Col(
                    width=12,
                    children=[
                        html.Div(
                            vtk_view,
                            style={"height": "calc(80vh - 20px)", "width": "100%"},
                        )
                    ],
                ),
            ]
        ),
    ],
)


@app.callback(
    Output("vtk-representation", "colorMapPreset"),
    [Input("dropdown-preset", "value")]
)
def updatePresetName(name):
    print(name)
    return "erdc_blue2green_muted"

if __name__ == "__main__":
    app.run_server(debug=True)
