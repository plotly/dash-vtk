import random

import dash
import dash_vtk
import dash_bootstrap_components as dbc
import dash_html_components as html
import dash_core_components as dcc
from dash.dependencies import Input, Output, State


def custom_card(children):
    return dbc.Card(
        html.Div(children, style={"height": "100%"}),
        body=True,
        style={"height": "70vh"},
    )


sliders = {
    "Slice i": dcc.Slider(id="slider-i", min=0, max=256, value=128),
    "Slice j": dcc.Slider(id="slider-j", min=0, max=256, value=128),
    "Slice k": dcc.Slider(id="slider-k", min=0, max=95, value=47),
    "Color Level": dcc.Slider(id="slider-lvl", min=0, max=4095, value=1000),
    "Color Window": dcc.Slider(id="slider-window", min=0, max=4095, value=4095),
}

controls = dbc.Card(
    body=True,
    children=dbc.Row(
        [
            dbc.Col(dbc.FormGroup([dbc.Label(label), component]))
            for label, component in sliders.items()
        ]
    ),
)

slice_property = {"colorWindow": 4095, "colorLevel": 1000}

slice_view = dash_vtk.View(
    id="slice-view",
    cameraPosition=[1, 0, 0],
    cameraViewUp=[0, 0, -1],
    cameraParallelProjection=False,
    background=[1, 1, 1],
    children=[
        dash_vtk.ShareDataSet(
            dash_vtk.Reader(
                vtkClass="vtkXMLImageDataReader",
                url="https://data.kitware.com/api/v1/item/59e12e988d777f31ac6455c5/download",
            )
        ),
        dash_vtk.SliceRepresentation(
            id="slice-repr-i",
            iSlice=128,
            property=slice_property,
            children=dash_vtk.ShareDataSet(),
        ),
        dash_vtk.SliceRepresentation(
            id="slice-repr-j",
            jSlice=128,
            property=slice_property,
            children=dash_vtk.ShareDataSet(),
        ),
        dash_vtk.SliceRepresentation(
            id="slice-repr-k",
            kSlice=47,
            property=slice_property,
            children=dash_vtk.ShareDataSet(),
        ),
    ],
)


volume_view = dash_vtk.View(
    id="volume-view",
    background=[0, 0, 0],
    cameraPosition=[1, 0, 0],
    cameraViewUp=[0, 0, -1],
    cameraParallelProjection=False,
    children=[
        dash_vtk.VolumeRepresentation(
            [
                html.Div(dash_vtk.VolumeController(), style={"display": "none"}),
                dash_vtk.ShareDataSet(),
            ]
        )
    ],
)


app = dash.Dash(__name__, external_stylesheets=[dbc.themes.BOOTSTRAP])
server = app.server

app.layout = dbc.Container(
    fluid=True,
    children=[
        html.H2("Demo of Slice Rendering"),
        html.Br(),
        controls,
        html.Br(),
        dbc.Row(
            [
                dbc.Col(width=6, children=custom_card(slice_view)),
                dbc.Col(width=6, children=custom_card(volume_view)),
            ]
        ),
    ],
)


@app.callback(
    [
        Output("slice-view", "triggerRender"),
        Output("slice-repr-i", "property"),
        Output("slice-repr-j", "property"),
        Output("slice-repr-k", "property"),
    ],
    [Input("slider-lvl", "value"), Input("slider-window", "value")],
)
def update_slice_property(color_lvl, color_window):
    new_prop = {"colorWindow": color_window, "colorLevel": color_lvl}
    return random.random(), new_prop, new_prop, new_prop


@app.callback(
    [
        Output("slice-view", "triggerRender"),
        Output("slice-repr-i", "iSlice"),
        Output("slice-repr-j", "jSlice"),
        Output("slice-repr-k", "kSlice"),
    ],
    [
        Input("slider-i", "value"),
        Input("slider-j", "value"),
        Input("slider-k", "value"),
    ],
)
def update_slice_property(i, j, k):
    return random.random(), i, j, k


if __name__ == "__main__":
    app.run_server(debug=True)
