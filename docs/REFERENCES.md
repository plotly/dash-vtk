# Component References

- [Algorithm](#Algorithm)
- [Calculator](#Calculator)
- [CellData](#CellData)
- [DataArray](#DataArray)
- [FieldData](#FieldData)
- [GeometryRepresentation](#GeometryRepresentation)
- [ImageData](#ImageData)
- [Mesh](#Mesh)
- [PointCloudRepresentation](#PointCloudRepresentation)
- [PointData](#PointData)
- [PolyData](#PolyData)
- [Reader](#Reader)
- [ShareDataSet](#ShareDataSet)
- [SliceRepresentation](#SliceRepresentation)
- [View](#View)
- [Volume](#Volume)
- [VolumeController](#VolumeController)
- [VolumeDataRepresentation](#VolumeDataRepresentation)
- [VolumeRepresentation](#VolumeRepresentation)

## Algorithm

```python
dash_vtk.Algorithm(children, id, port, vtkClass, state, **kwargs)
```

An Algorithm component.
Algorithm is exposing a source or filter to a downstream filter
It takes the following set of properties:
  - vtkClass: vtkClassName
  - state: {}

Keyword arguments:
- children (list of a list of or a singular dash component, string or numbers | a list of or a singular dash component, string or number; optional)
- id (string; optional): The ID used to identify this component.
- port (number; default 0): downstream connection port
- vtkClass (string; default 'vtkConeSource'): vtkClass name
- state (dict; optional): set of property values for vtkClass

[Back to menu](#components-reference)


## Calculator

```python
dash_vtk.Calculator(children, id, port, name, location, arrays, formula, **kwargs)
```

A Calculator component.
Calculator is exposing a source or filter to a downstream filter
It takes the following set of properties:
  - name: 'scalars'    // name of the generated field
  - location: 'POINT'  // POINT/CELL
  - arrays: []         // Name of array to have access in formula
  - formula: fn

Keyword arguments:
- children (list of a list of or a singular dash component, string or numbers | a list of or a singular dash component, string or number; optional)
- id (string; optional): The ID used to identify this component.
- port (number; default 0): downstream connection port
- name (string; default 'scalars'): Field name
- location (string; default 'POINT'): Field location [POINT, CELL, COORDINATE, SCALARS, ]
- arrays (list of strings; optional): List of fields you want available for your formula

[Back to menu](#components-reference)


## CellData

```python
dash_vtk.CellData(children, **kwargs)
```

A CellData component.
CellData is exposing a vtkCellData to a downstream element

Keyword arguments:
- children (list of a list of or a singular dash component, string or numbers | a list of or a singular dash component, string or number; optional)

[Back to menu](#components-reference)


## DataArray

```python
dash_vtk.DataArray(id, type, name, values, numberOfComponents, registration, **kwargs)
```

A DataArray component.
DataArray is creating a vtkDataArray for the container fields
It takes the following set of properties:
  - type: 'Float32Array', 'Float64Array', 'Uint16Array', ...
  - values: [number, number, ...]
  - numberOfComponents: 1,
  - registration: 'addArray', 'setScalars', ...

Keyword arguments:
- id (string; optional): The ID used to identify this component.
- type (string; default 'Float32Array'): Typed array name
- name (string; default 'scalars'): Field name
- values (list of numbers; optional): Actual values to use inside our array
- numberOfComponents (number; default 1): Number of components / Tuple size
- registration (string; default 'addArray'): Name of the method to call on the fieldData (addArray, setScalars, setVectors...)

[Back to menu](#components-reference)


## FieldData

```python
dash_vtk.FieldData(children, **kwargs)
```

A FieldData component.
FieldData is exposing a FieldData to a downstream element

Keyword arguments:
- children (list of a list of or a singular dash component, string or numbers | a list of or a singular dash component, string or number; optional)

[Back to menu](#components-reference)


## GeometryRepresentation

```python
dash_vtk.GeometryRepresentation(children, id, actor, mapper, property, colorMapPreset, colorDataRange, **kwargs)
```

A GeometryRepresentation component.
GeometryRepresentation is responsible to convert a vtkPolyData into rendering
It takes the following set of properties:
  - colorBy: ['POINTS', ''],
  - pointSize: 1,
  - color: [1,1,1],

Keyword arguments:
- children (list of a list of or a singular dash component, string or numbers | a list of or a singular dash component, string or number; optional)
- id (string; optional): The ID used to identify this component.
- actor (dict; optional): Properties to set to the actor
- mapper (dict; optional): Properties to set to the actor
- property (dict; optional): Properties to set to the actor.property
- colorMapPreset (string; default 'erdc_rainbow_bright'): Preset name for the lookup table color map
- colorDataRange (list of numbers; default [0, 1]): Data range use for the colorMap

[Back to menu](#components-reference)


## ImageData

```python
dash_vtk.ImageData(children, id, port, dimensions, spacing, origin, **kwargs)
```

An ImageData component.
ImageData is exposing a vtkImageData to a downstream filter
It takes the following set of properties:
  - dimensions: [nx, ny, nz],
  - origin: [0, 0, 0]
  - spacing: [1, 1, 1]

Keyword arguments:
- children (list of a list of or a singular dash component, string or numbers | a list of or a singular dash component, string or number; optional)
- id (string; optional): The ID used to identify this component.
- port (number; default 0): downstream connection port
- dimensions (list of numbers; default [1, 1, 1]): Number of points along x, y, z
- spacing (list of numbers; default [1, 1, 1]): Spacing along x, y, z between points in world coordinates
- origin (list of numbers; default [0, 0, 0]): World coordinate of the lower left corner of your vtkImageData (i=0, j=0, k=0).

[Back to menu](#components-reference)


## Mesh

```python
dash_vtk.Mesh(id, port, state, **kwargs)
```

A Mesh component.
Mesh is exposing a vtkPolyData to a downstream filter
It takes the following set of properties:
  - state: { mesh: { ...polydata-props }, field: { ...dataArray } }

Keyword arguments:
- id (string; optional): The ID used to identify this component.
- port (number; default 0): downstream connection port
- state (dict; default {
  mesh: { points: [] },
}): State of the mesh

[Back to menu](#components-reference)


## PointCloudRepresentation

```python
dash_vtk.PointCloudRepresentation(xyz, rgb, rgba, scalars, colorMapPreset, colorDataRange, property, **kwargs)
```

A PointCloudRepresentation component.
PointCloudRepresentation expect the following set of properties
  - xyz: [x0, y0, z0, x1, ..., zn]
  - rgb: [...]
  - rgba: [...]
  - scalars: [...]

Keyword arguments:
- xyz (list of numbers; default [0, 0, 0]): Points coordinates
- rgb (list of numbers; optional): Use RGB values to attach to the points/vertex
- rgba (list of numbers; optional): Use RGBA values to attach to the points/vertex
- scalars (list of numbers; optional): Field values to attach to the points
- colorMapPreset (string; default 'erdc_rainbow_bright'): Preset name for the lookup table color map
- colorDataRange (list of numbers; default [0, 1]): Data range use for the colorMap
- property (dict; optional): Properties to set to the actor.property

[Back to menu](#components-reference)


## PointData

```python
dash_vtk.PointData(children, **kwargs)
```

A PointData component.
PointData is exposing a vtkPointData to a downstream element

Keyword arguments:
- children (list of a list of or a singular dash component, string or numbers | a list of or a singular dash component, string or number; optional)

[Back to menu](#components-reference)


## PolyData

```python
dash_vtk.PolyData(children, id, port, points, verts, lines, polys, strips, connectivity, **kwargs)
```

A PolyData component.
PolyData is exposing a vtkPolyData to a downstream filter
It takes the following set of properties:
  - points: [x, y, z, x, y, z, ...],
  - verts: [cellSize, pointId0, pointId1, ..., cellSize, pointId0, ...]
  - lines: [cellSize, pointId0, pointId1, ..., cellSize, pointId0, ...]
  - polys: [cellSize, pointId0, pointId1, ..., cellSize, pointId0, ...]
  - strips: [cellSize, pointId0, pointId1, ..., cellSize, pointId0, ...]
Cell connectivity helper property:
  - connectivity: 'manual', // [manual, points, triangles, strips]

Keyword arguments:
- children (list of a list of or a singular dash component, string or numbers | a list of or a singular dash component, string or number; optional)
- id (string; optional): The ID used to identify this component.
- port (number; default 0): downstream connection port
- points (list of numbers; optional): xyz coordinates
- verts (list of numbers; optional): verts cells
- lines (list of numbers; optional): lines cells
- polys (list of numbers; optional): polys cells
- strips (list of numbers; optional): strips cells
- connectivity (string; default 'manual'): Type of connectivity `manual` or implicit such as `points`, `triangles`, `strips`

[Back to menu](#components-reference)


## Reader

```python
dash_vtk.Reader(children, id, port, vtkClass, url, parseAsText, parseAsArrayBuffer, renderOnUpdate, resetCameraOnUpdate, **kwargs)
```

A Reader component.
Reader is exposing a reader to a downstream filter
It takes the following set of properties:
  - vtkClass: vtk.js reader class name
  - url: string
  - parseAsText: string
  - parseAsArrayBuffer: base64String

Keyword arguments:
- children (list of a list of or a singular dash component, string or numbers | a list of or a singular dash component, string or number; optional)
- id (string; optional): The ID used to identify this component.
- port (number; default 0): downstream connection port
- vtkClass (string; default ''): vtkClass name
- url (string; optional): set of url to fetch data from
- parseAsText (string; optional): set text data to process
- parseAsArrayBuffer (string; optional): set binary data to process from base64 string
- renderOnUpdate (boolean; default True): Automatically render on data loaded
- resetCameraOnUpdate (boolean; default True): Automatically reset camera on data loaded

[Back to menu](#components-reference)


## ShareDataSet

```python
dash_vtk.ShareDataSet(children, id, port, name, **kwargs)
```

A ShareDataSet component.
ShareDataSet capture a dataset or a source and allow it to use it in another
pipeline or representation.

Keyword arguments:
- children (list of a list of or a singular dash component, string or numbers | a list of or a singular dash component, string or number; optional)
- id (string; optional): The ID used to identify this component.
- port (number; default 0): downstream connection port
- name (string; default 'shared'): Unique dataset name to cross reference

[Back to menu](#components-reference)


## SliceRepresentation

```python
dash_vtk.SliceRepresentation(children, id, mapper, actor, property, colorMapPreset, colorDataRange, iSlice, jSlice, kSlice, xSlice, ySlice, zSlice, **kwargs)
```

A SliceRepresentation component.
SliceRepresentation is responsible to convert a vtkPolyData into rendering
It takes the following set of properties:
  - colorBy: ['POINTS', ''],
  - pointSize: 1,
  - color: [1,1,1],

Keyword arguments:
- children (list of a list of or a singular dash component, string or numbers | a list of or a singular dash component, string or number; optional)
- id (string; optional): The ID used to identify this component.
- mapper (dict; optional): Properties to set to the mapper
- actor (dict; optional): Properties to set to the slice/actor
- property (dict; optional): Properties to set to the volume.property
- colorMapPreset (string; default 'erdc_rainbow_bright'): Preset name for the lookup table color map
- colorDataRange (list of numbers | string; default 'auto'): Data range use for the colorMap
- iSlice (number; optional): index of the slice along i
- jSlice (number; optional): index of the slice along j
- kSlice (number; optional): index of the slice along k
- xSlice (number; optional): index of the slice along x
- ySlice (number; optional): index of the slice along y
- zSlice (number; optional): index of the slice along z

[Back to menu](#components-reference)


## View

```python
dash_vtk.View(children, id, background, interactorSettings, cameraPosition, cameraViewUp, cameraParallelProjection, triggerRender, triggerResetCamera, **kwargs)
```

A View component.
View is responsible to render vtk.js data.
It takes the following set of properties:
  - `background`: [0.2, 0.3, 0.4]
  - `cameraPosition`: [0, 0, 1]
  - `cameraViewUp`: [0, 1, 0]
  - `cameraParallelProjection`: false

Keyword arguments:
- children (list of a list of or a singular dash component, string or numbers | a list of or a singular dash component, string or number; optional): List of representation to show
- id (string; optional): The ID used to identify this component.
- background (list; default [0.2, 0.3, 0.4]): The color of the view background using 3 floating numbers
between 0-1 of Red, Green, Blue component.
- interactorSettings (list; default [
  {
    button: 1,
    action: 'Rotate',
  },
  {
    button: 2,
    action: 'Pan',
  },
  {
    button: 3,
    action: 'Zoom',
    scrollEnabled: true,
  },
  {
    button: 1,
    action: 'Pan',
    shift: true,
  },
  {
    button: 1,
    action: 'Zoom',
    alt: true,
  },
  {
    button: 1,
    action: 'ZoomToMouse',
    control: true,
  },
  {
    button: 1,
    action: 'Roll',
    alt: true,
    shift: true,
  },
]): Configure the interactions
- cameraPosition (list; default [0, 0, 1]): Initial camera position from an object in [0,0,0]
- cameraViewUp (list; default [0, 1, 0]): Initial camera position from an object in [0,0,0]
- cameraParallelProjection (boolean; default False): Use parallel projection (default: false)
- triggerRender (number; default 0): Property use to trigger a render when changing.
- triggerResetCamera (number; default 0): Property use to trigger a resetCamera when changing.

[Back to menu](#components-reference)


## Volume

```python
dash_vtk.Volume(id, port, state, **kwargs)
```

A Volume component.
Volume is exposing a vtkImageData to a downstream filter
It takes the following set of properties:
  - state: { image: { ...imagedata-props }, field: { ...dataArray } }

Keyword arguments:
- id (string; optional): The ID used to identify this component.
- port (number; default 0): downstream connection port
- state (dict; default {
  image: { dimension: [10, 10, 10] },
}): State of the volume

[Back to menu](#components-reference)


## VolumeController

```python
dash_vtk.VolumeController(id, size, rescaleColorMap, **kwargs)
```

A VolumeController component.
VolumeController is a GUI to control the piecewise function

Keyword arguments:
- id (string; optional): The ID used to identify this component.
- size (list of numbers; default [400, 150]): Controller size in pixels
- rescaleColorMap (boolean; default True): Use opacity range to rescale color map

[Back to menu](#components-reference)


## VolumeDataRepresentation

```python
dash_vtk.VolumeDataRepresentation(id, dimensions, spacing, origin, rgb, rgba, scalars, scalarsType, mapper, volume, property, colorMapPreset, volumeController, controllerSize, rescaleColorMap, colorDataRange, **kwargs)
```

A VolumeDataRepresentation component.
VolumneDataRepresentation expect the following set of properties
  - dimensions: [10, 20, 5]
  - spacing: [1, 1, 1]
  - origin: [0, 0, 0]
  - rgb: [...]
  - rgba: [...]
  - scalars: [...]
  - scalarsType: Float32Array

Keyword arguments:
- id (string; optional): The ID used to identify this component.
- dimensions (list of numbers; optional): Number of points along x, y, z
- spacing (list of numbers; optional): Spacing along x, y, z between points in world coordinates
- origin (list of numbers; optional): World coordinate of the lower left corner of your vtkImageData (i=0, j=0, k=0).
- rgb (list of numbers; optional): Use RGB values to attach to the points/vertex
- rgba (list of numbers; optional): Use RGBA values to attach to the points/vertex
- scalars (list of numbers; optional): Field values to attach to the points
- scalarsType (string; default 'Float32Array'): Types of numbers provided in scalars
- mapper (dict; optional): Properties to set to the mapper
- volume (dict; optional): Properties to set to the volume
- property (dict; optional): Properties to set to the volume.property
- colorMapPreset (string; default 'erdc_rainbow_bright'): Preset name for the lookup table color map
- volumeController (boolean; default True): Show volumeController
- controllerSize (list of numbers; default [400, 150]): Controller size in pixels
- rescaleColorMap (boolean; default True): Use opacity range to rescale color map
- colorDataRange (list of numbers | string; default 'auto'): Data range use for the colorMap

[Back to menu](#components-reference)


## VolumeRepresentation

```python
dash_vtk.VolumeRepresentation(children, id, mapper, volume, property, colorMapPreset, colorDataRange, **kwargs)
```

A VolumeRepresentation component.
VolumeRepresentation is responsible to convert a vtkPolyData into rendering
It takes the following set of properties:
  - colorBy: ['POINTS', ''],
  - pointSize: 1,
  - color: [1,1,1],

Keyword arguments:
- children (list of a list of or a singular dash component, string or numbers | a list of or a singular dash component, string or number; optional)
- id (string; optional): The ID used to identify this component.
- mapper (dict; optional): Properties to set to the mapper
- volume (dict; optional): Properties to set to the volume
- property (dict; optional): Properties to set to the volume.property
- colorMapPreset (string; default 'erdc_rainbow_bright'): Preset name for the lookup table color map
- colorDataRange (list of numbers | string; default 'auto'): Data range use for the colorMap

[Back to menu](#components-reference)

