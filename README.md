# Dash VTK

Dash VTK lets you integrate the `vtk.js` visualization pipeline directly into your Dash app. It is powered by [`react-vtk-js`](https://github.com/Kitware/react-vtk-js/).

![ ![A demo of dash-vtk in action](https://github.com/plotly/dash-vtk/blob/master/docs/images/vtk-demo.gif?raw=true) ](./docs/images/vtk-demo.gif)

## Getting started

### Quickstart (Python)

First, install the library through `pip`:
```
pip install dash-vtk
```

Then, create a file called `app.py` and add the following example:

```python
import dash
import dash_vtk
import dash_html_components as html

app = dash.Dash(__name__)

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
```

Now, simply run the app:
```
python app.py
```

For a more detailed example, see `usage.py`.

### Quickstart (R)

First, install the package from GitHub (the package is not yet available via CRAN):
```
remotes::install_github("plotly/dash-vtk")
```

then, create your component and add it to your layout:

```r
library(dash)
library(dashVtk)
library(dashHtmlComponents)

app <- Dash$new()

app$layout(htmlDiv(
    style = list("width" = "100%", "height" = "calc(100vh - 16px)"),
    children = vtkView(list(
        vtkGeometryRepresentation(
            vtkAlgorithm(
                vtkClass = "vtkConeSource",
                state = list("resolution" = 64, "capping" = FALSE),
            )
        )
    )
)

app$run_server()
```
## Contributing

See [docs/CONTRIBUTING.md](./docs/CONTRIBUTING.md) to learn about:

* Setting up the environment
* Coding Style
* Code quality & design
* Tests
* Publishing


## Running the demos

First clone the project (replace `<name>` with the desired demo):

``` bash
git clone https://github.com/plotly/dash-vtk.git
cd dash-vtk/demos/<name>/
```

Create a venv and install the requirements:
```bash
python -m venv venv
source venv/bin/activate  # for Windows, use venv\Scripts\activate.bat
pip install -e ../../  # IMPORTANT! If you skip you will get the pip version of dash-vtk
pip install -r requirements.txt
```

Run the demo:
```bash
python app.py
```

## References

You can find the complete API reference in [`docs/REFERENCES.md`](https://github.com/plotly/dash-vtk/blob/master/docs/REFERENCES.md) for each of the following components:
- [Algorithm](https://github.com/plotly/dash-vtk/blob/master/docs/REFERENCES.md#Algorithm)
- [Calculator](https://github.com/plotly/dash-vtk/blob/master/docs/REFERENCES.md#Calculator)
- [CellData](https://github.com/plotly/dash-vtk/blob/master/docs/REFERENCES.md#CellData)
- [DataArray](https://github.com/plotly/dash-vtk/blob/master/docs/REFERENCES.md#DataArray)
- [FieldData](https://github.com/plotly/dash-vtk/blob/master/docs/REFERENCES.md#FieldData)
- [GeometryRepresentation](https://github.com/plotly/dash-vtk/blob/master/docs/REFERENCES.md#GeometryRepresentation)
- [ImageData](https://github.com/plotly/dash-vtk/blob/master/docs/REFERENCES.md#ImageData)
- [PointCloudRepresentation](https://github.com/plotly/dash-vtk/blob/master/docs/REFERENCES.md#PointCloudRepresentation)
- [PointData](https://github.com/plotly/dash-vtk/blob/master/docs/REFERENCES.md#PointData)
- [PolyData](https://github.com/plotly/dash-vtk/blob/master/docs/REFERENCES.md#PolyData)
- [Reader](https://github.com/plotly/dash-vtk/blob/master/docs/REFERENCES.md#Reader)
- [ShareDataSet](https://github.com/plotly/dash-vtk/blob/master/docs/REFERENCES.md#ShareDataSet)
- [SliceRepresentation](https://github.com/plotly/dash-vtk/blob/master/docs/REFERENCES.md#SliceRepresentation)
- [View](https://github.com/plotly/dash-vtk/blob/master/docs/REFERENCES.md#View)
- [VolumeController](https://github.com/plotly/dash-vtk/blob/master/docs/REFERENCES.md#VolumeController)
- [VolumeDataRepresentation](https://github.com/plotly/dash-vtk/blob/master/docs/REFERENCES.md#VolumeDataRepresentation)
- [VolumeRepresentation](https://github.com/plotly/dash-vtk/blob/master/docs/REFERENCES.md#VolumeRepresentation)


## Demos

### Usage for `dash_vtk.Algorithm`

* [Code](https://github.com/plotly/dash-vtk/tree/master/demos/usage-algorithm)
* Online Demo (coming soon)

![ ![A demo of the usage-algorithm app](https://github.com/plotly/dash-vtk/blob/master/demos/usage-algorithm/demo.jpg?raw=true) ](./demos/usage-algorithm/demo.jpg)

### Point Cloud with PyVista

* [Code](https://github.com/plotly/dash-vtk/tree/master/demos/pyvista-point-cloud)
* Online Demo (coming soon)

![ ![A demo of the pyvista-point-cloud app](https://github.com/plotly/dash-vtk/blob/master/demos/pyvista-point-cloud/demo.jpg?raw=true) ](./demos/pyvista-point-cloud/demo.jpg)


### Terrain deformation using PyVista and dash-vtk

* [Code](https://github.com/plotly/dash-vtk/tree/master/demos/pyvista-terrain-following-mesh)
* Online Demo (coming soon)

![ ![A demo of the pyvista-terrain-following-mesh app](https://github.com/plotly/dash-vtk/blob/master/demos/pyvista-terrain-following-mesh/demo.jpg?raw=true) ](./demos/pyvista-terrain-following-mesh/demo.jpg)


### Volume Rendering

* [Code](https://github.com/plotly/dash-vtk/tree/master/demos/volume-rendering)
* Online Demo (coming soon)

![ ![A demo of the volume-rendering app](https://github.com/plotly/dash-vtk/blob/master/demos/volume-rendering/demo.jpg?raw=true) ](./demos/volume-rendering/demo.jpg)

### VTK for data processing and dash-vtk for rendering

* [Code](https://github.com/plotly/dash-vtk/tree/master/demos/usage-vtk-cfd)
* Online Demo (coming soon)

![ ![A demo of the usage-vtk-cfd app](https://github.com/plotly/dash-vtk/blob/master/demos/usage-vtk-cfd/demo.jpg?raw=true) ](./demos/usage-vtk-cfd/demo.jpg)

### Synthetic Volume Rendering

* [Code](https://github.com/plotly/dash-vtk/tree/master/demos/synthetic-volume-rendering)
* Online Demo (coming soon)

![ ![A demo of the synthetic-volume-rendering app](https://github.com/plotly/dash-vtk/blob/master/demos/synthetic-volume-rendering/demo.jpg?raw=true) ](./demos/synthetic-volume-rendering/demo.jpg)
