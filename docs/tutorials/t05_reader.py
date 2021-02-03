import os
import dash
import dash_html_components as html

import dash_vtk

# Data file path
files = ['cow-nonormals.obj', 'pumpkin_tall_10k.obj', 'teapot.obj', 'teddy.obj']
root_repo_path = os.path.dirname(os.path.dirname(
    os.path.dirname(os.path.abspath(__file__))))
obj_file = os.path.join(root_repo_path, "demos", "data", files[0])


txt_content = None
with open(obj_file, 'r') as file:
  txt_content = file.read()

content = dash_vtk.View([
    dash_vtk.GeometryRepresentation([
        dash_vtk.Reader(
            vtkClass="vtkOBJReader",
            parseAsText=txt_content,
        ),
    ]),
])

# Dash setup
app = dash.Dash(__name__)
server = app.server

app.layout = html.Div(
    style={"width": "100%", "height": "calc(100vh - 15px)"},
    children=[content],
)

if __name__ == "__main__":
    app.run_server(debug=True)
