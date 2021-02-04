import dash_vtk

from vtk.util.numpy_support import vtk_to_numpy
from vtk.vtkFiltersGeometry import vtkGeometryFilter

# Numpy to JS TypedArray
to_js_type = {
    'int8': 'Int8Array',
    'uint8': 'Uint8Array',
    'int16': 'Int16Array',
    'uint16': 'Uint16Array',
    'int32': 'Int32Array',
    'uint32': 'Uint32Array',
    'int64': 'Int32Array',
    'uint64': 'Uint32Array',
    'float32': 'Float32Array',
    'float64': 'Float64Array',
}


def to_mesh_state(dataset, field_to_keep=None):
  '''Expect any dataset and extract its surface into a dash_vtk.Mesh state property'''
  if dataset is None:
    return None

  # Make sure we have a polydata to export
  polydata = None
  if dataset.IsA('vtkPolyData'):
    polydata = dataset
  else:
    extractSkinFilter = vtkGeometryFilter()
    extractSkinFilter.SetInputData(dataset)
    extractSkinFilter.Update()
    polydata = extractSkinFilter.GetOutput()

  if polydata.GetPoints() is None:
    return None

  # Extract mesh
  points = vtk_to_numpy(polydata.GetPoints().GetData()).ravel()
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
  dataRange = [0, 1]
  location = None
  if field_to_keep is not None:
    p_array = polydata.GetPointData().GetArray(field_to_keep)
    c_array = polydata.GetCellData().GetArray(field_to_keep)

    if c_array:
      dataRange = c_array.GetRange(-1)
      nb_comp = c_array.GetNumberOfComponents()
      values = vtk_to_numpy(p_array).ravel()
      js_types = to_js_type[str(values.dtype)]
      location = 'CellData'

    if p_array:
      dataRange = p_array.GetRange(-1)
      nb_comp = p_array.GetNumberOfComponents()
      values = vtk_to_numpy(p_array).ravel()
      js_types = to_js_type[str(values.dtype)]
      location = 'PointData'

  state = {
      'mesh': {
          'points': points,
      },
  }
  if len(verts):
    state['mesh']['verts'] = verts
  if len(lines):
    state['mesh']['lines'] = lines
  if len(polys):
    state['mesh']['polys'] = polys
  if len(strips):
    state['mesh']['strips'] = strips

  if values is not None:
    state.update({
      'field': {
          'name': field_to_keep,
          'values': values,
          'numberOfComponents': nb_comp,
          'type': js_types,
          'location': location,
          'dataRange': dataRange,
      },
    })

  return state


def to_volume_state(dataset):
    '''Expect a vtkImageData and extract its setting for the dash_vtk.Volume state'''
    if dataset is None or not dataset.IsA('vtkImageData'):
        return None

    state = {
        'image': {
            'dimensions': dataset.GetDimensions(),
            'spacing': dataset.GetSpacing(),
            'origin': dataset.GetOrigin(),
        },
    }
    scalars = dataset.GetPointData().GetScalars()

    if scalars is not None:
        values = vtk_to_numpy(scalars).ravel()
        js_types = to_js_type[str(values.dtype)]
        state['field'] = {
            'name': scalars.GetName(),
            'numberOfComponents': scalars.GetNumberOfComponents(),
            'dataRange': scalars.GetRange(-1),
            'type': js_types,
            'values': values,
        }


    return state


presets = [
    "KAAMS",
    "Cool to Warm",
    "Cool to Warm (Extended)",
    "Warm to Cool",
    "Warm to Cool (Extended)",
    "Rainbow Desaturated",
    "Cold and Hot",
    "Black-Body Radiation",
    "X Ray",
    "Grayscale",
    "BkRd",
    "BkGn",
    "BkBu",
    "BkMa",
    "BkCy",
    "Black, Blue and White",
    "Black, Orange and White",
    "Linear YGB 1211g",
    "Linear Green (Gr4L)",
    "Linear Blue (8_31f)",
    "Blue to Red Rainbow",
    "Red to Blue Rainbow",
    "Rainbow Blended White",
    "Rainbow Blended Grey",
    "Rainbow Blended Black",
    "Blue to Yellow",
    "blot",
    "CIELab Blue to Red",
    "jet",
    "rainbow",
    "erdc_rainbow_bright",
    "erdc_rainbow_dark",
    "nic_CubicL",
    "nic_CubicYF",
    "gist_earth",
    "2hot",
    "erdc_red2yellow_BW",
    "erdc_marine2gold_BW",
    "erdc_blue2gold_BW",
    "erdc_sapphire2gold_BW",
    "erdc_red2purple_BW",
    "erdc_purple2pink_BW",
    "erdc_pbj_lin",
    "erdc_blue2green_muted",
    "erdc_blue2green_BW",
    "GREEN-WHITE_LINEAR",
    "erdc_green2yellow_BW",
    "blue2cyan",
    "erdc_blue2cyan_BW",
    "erdc_blue_BW",
    "BLUE-WHITE",
    "erdc_purple_BW",
    "erdc_magenta_BW",
    "magenta",
    "RED-PURPLE",
    "erdc_red_BW",
    "RED_TEMPERATURE",
    "erdc_orange_BW",
    "heated_object",
    "erdc_gold_BW",
    "erdc_brown_BW",
    "copper_Matlab",
    "pink_Matlab",
    "bone_Matlab",
    "gray_Matlab",
    "Purples",
    "Blues",
    "Greens",
    "PuBu",
    "BuPu",
    "BuGn",
    "GnBu",
    "GnBuPu",
    "BuGnYl",
    "PuRd",
    "RdPu",
    "Oranges",
    "Reds",
    "RdOr",
    "BrOrYl",
    "RdOrYl",
    "CIELab_blue2red",
    "blue2yellow",
    "erdc_blue2gold",
    "erdc_blue2yellow",
    "erdc_cyan2orange",
    "erdc_purple2green",
    "erdc_purple2green_dark",
    "coolwarm",
    "BuRd",
    "Spectral_lowBlue",
    "GnRP",
    "GYPi",
    "GnYlRd",
    "GBBr",
    "PuOr",
    "PRGn",
    "PiYG",
    "OrPu",
    "BrBG",
    "GyRd",
    "erdc_divHi_purpleGreen",
    "erdc_divHi_purpleGreen_dim",
    "erdc_divLow_icePeach",
    "erdc_divLow_purpleGreen",
    "Haze_green",
    "Haze_lime",
    "Haze",
    "Haze_cyan",
    "nic_Edge",
    "erdc_iceFire_H",
    "erdc_iceFire_L",
    "hsv",
    "hue_L60",
    "Spectrum",
    "Warm",
    "Cool",
    "Blues",
    "Wild Flower",
    "Citrus",
    "Brewer Diverging Purple-Orange (11)",
    "Brewer Diverging Purple-Orange (10)",
    "Brewer Diverging Purple-Orange (9)",
    "Brewer Diverging Purple-Orange (8)",
    "Brewer Diverging Purple-Orange (7)",
    "Brewer Diverging Purple-Orange (6)",
    "Brewer Diverging Purple-Orange (5)",
    "Brewer Diverging Purple-Orange (4)",
    "Brewer Diverging Purple-Orange (3)",
    "Brewer Diverging Spectral (11)",
    "Brewer Diverging Spectral (10)",
    "Brewer Diverging Spectral (9)",
    "Brewer Diverging Spectral (8)",
    "Brewer Diverging Spectral (7)",
    "Brewer Diverging Spectral (6)",
    "Brewer Diverging Spectral (5)",
    "Brewer Diverging Spectral (4)",
    "Brewer Diverging Spectral (3)",
    "Brewer Diverging Brown-Blue-Green (11)",
    "Brewer Diverging Brown-Blue-Green (10)",
    "Brewer Diverging Brown-Blue-Green (9)",
    "Brewer Diverging Brown-Blue-Green (8)",
    "Brewer Diverging Brown-Blue-Green (7)",
    "Brewer Diverging Brown-Blue-Green (6)",
    "Brewer Diverging Brown-Blue-Green (5)",
    "Brewer Diverging Brown-Blue-Green (4)",
    "Brewer Diverging Brown-Blue-Green (3)",
    "Brewer Sequential Blue-Green (9)",
    "Brewer Sequential Blue-Green (8)",
    "Brewer Sequential Blue-Green (7)",
    "Brewer Sequential Blue-Green (6)",
    "Brewer Sequential Blue-Green (5)",
    "Brewer Sequential Blue-Green (4)",
    "Brewer Sequential Blue-Green (3)",
    "Brewer Sequential Yellow-Orange-Brown (9)",
    "Brewer Sequential Yellow-Orange-Brown (8)",
    "Brewer Sequential Yellow-Orange-Brown (7)",
    "Brewer Sequential Yellow-Orange-Brown (6)",
    "Brewer Sequential Yellow-Orange-Brown (5)",
    "Brewer Sequential Yellow-Orange-Brown (4)",
    "Brewer Sequential Yellow-Orange-Brown (3)",
    "Brewer Sequential Blue-Purple (9)",
    "Brewer Sequential Blue-Purple (8)",
    "Brewer Sequential Blue-Purple (7)",
    "Brewer Sequential Blue-Purple (6)",
    "Brewer Sequential Blue-Purple (5)",
    "Brewer Sequential Blue-Purple (4)",
    "Brewer Sequential Blue-Purple (3)",
    "Brewer Qualitative Accent",
    "Brewer Qualitative Dark2",
    "Brewer Qualitative Set2",
    "Brewer Qualitative Pastel2",
    "Brewer Qualitative Pastel1",
    "Brewer Qualitative Set1",
    "Brewer Qualitative Paired",
    "Brewer Qualitative Set3",
    "Traffic Lights",
    "Traffic Lights For Deuteranopes",
    "Traffic Lights For Deuteranopes 2",
    "Muted Blue-Green",
    "Green-Blue Asymmetric Divergent (62Blbc)",
    "Asymmtrical Earth Tones (6_21b)",
    "Yellow 15",
    "Magma (matplotlib)",
    "Inferno (matplotlib)",
    "Plasma (matplotlib)",
    "Viridis (matplotlib)",
    "BlueObeliskElements",
]

def toDropOption(name):
    return {'label': name, 'value': name}


preset_as_options = list(map(toDropOption, presets))
