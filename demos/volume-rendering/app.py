import os
import dash
import dash_vtk
import dash_html_components as html

import vtk
from vtk.util.numpy_support import vtk_to_numpy

# Numpy to JS TypedArray
to_js_type = {
    'int8': 'Int8Array',
    'uint8': 'Uint8Array',
    'int16': 'Int16Array',
    'uint16': 'Uint16Array',
    'float32': 'Float32Array',
    'float64': 'Float64Array',
}

# Data file path
demo_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
head_vti = os.path.join(demo_dir, 'data', 'head.vti')

# Load dataset from dist
reader = vtk.vtkXMLImageDataReader()
reader.SetFileName(head_vti)
reader.Update()

image_data = reader.GetOutput()
dimensions = image_data.GetDimensions()
spacing = image_data.GetSpacing()
origin = image_data.GetOrigin()
scalars = vtk_to_numpy(image_data.GetPointData().GetScalars())
js_type = to_js_type[str(scalars.dtype)]

app = dash.Dash(__name__)
server = app.server

app.layout = html.Div(
    style={"height": "calc(100vh - 30px)", "width": "100%",},
    children=[
        dash_vtk.View(
            dash_vtk.VolumeRepresentation(
                children=[
                    dash_vtk.VolumeController(),
                    dash_vtk.ImageData(
                        dimensions=dimensions,
                        spacing=spacing,
                        origin=origin,
                        children=[
                            dash_vtk.PointData([
                                dash_vtk.DataArray(
                                    registration="setScalars",
                                    values=scalars,
                                    type=js_type,
                                )
                            ])
                        ],
                    ),
                ]
            )
        )
    ],
)

if __name__ == "__main__":
    app.run_server(debug=True)
