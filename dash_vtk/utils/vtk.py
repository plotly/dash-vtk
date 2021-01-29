import dash_vtk

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


def to_mesh_state(dataset, field_to_keep=None):
  if dataset is None:
    return None

  # Make sure we have a polydata to export
  polydata = None
  if dataset.IsA('vtkPolyData'):
    polydata = dataset
  else:
    extractSkinFilter = vtk.vtkGeometryFilter()
    extractSkinFilter.SetInputData(dataset)
    extractSkinFilter.Update()
    polydata = extractSkinFilter.GetOutput()

  # Extract mesh
  points = vtk_to_numpy(polydata.GetPoints().GetData())
  verts = vtk_to_numpy(polydata.GetVerts().GetData()
                      ) if polydata.GetVerts() else []
  lines = vtk_to_numpy(polydata.GetLines().GetData()
                      ) if polydata.GetLines() else []
  polys = vtk_to_numpy(polydata.GetPolys().GetData()
                      ) if polydata.GetPolys() else []
  strips = vtk_to_numpy(polydata.GetStrips().GetData()
                       ) if polydata.GetStrips() else []

  # Extract field
  values = None
  js_types = 'Float32Array'
  nb_comp = 1
  location = None
  if field_to_keep is not None:
    p_array = polydata.GetPointData().GetArray(field_to_keep)
    c_array = polydata.GetCellData().GetArray(field_to_keep)

    if c_array:
      nb_comp = c_array.GetNumberOfComponents()
      values = vtk_to_numpy(p_array)
      js_types = to_js_type[str(values.dtype)]
      location = 'CellData'

    if p_array:
      nb_comp = p_array.GetNumberOfComponents()
      values = vtk_to_numpy(p_array)
      js_types = to_js_type[str(values.dtype)]
      location = 'PointData'

  state = {
      'mesh': {
          'points': points,
          'verts': verts,
          'lines': lines,
          'polys': polys,
          'strips': strips,
      },
  }

  if values:
    state.extend({
      'field': {
          'name': field_to_keep,
          'values': values,
          'numberOfComponents': nb_comp,
          'type': js_types,
          'location': location,
      }
    })

  return state
