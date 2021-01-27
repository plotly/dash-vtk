import os
import inspect

import dash_vtk

def create_signature(c, prefix='dash_vtk.'):
    name = c.__name__
    args = str(inspect.signature(c))
    for r in ['=undefined', '=None', '=required']:
        args = args.replace(r, '')

    clean_signature = f"{prefix}{name}{args}"

    return clean_signature


components = [
    dash_vtk.Algorithm,
    dash_vtk.Calculator,
    dash_vtk.CellData,
    dash_vtk.DataArray,
    dash_vtk.FieldData,
    dash_vtk.GeometryRepresentation,
    dash_vtk.ImageData,
    dash_vtk.PointCloudRepresentation,
    dash_vtk.PointData,
    dash_vtk.PolyData,
    dash_vtk.Reader,
    dash_vtk.ShareDataSet,
    dash_vtk.SliceRepresentation,
    dash_vtk.View,
    dash_vtk.VolumeController,
    dash_vtk.VolumeDataRepresentation,
    dash_vtk.VolumeRepresentation
]

with open('./docs/REFERENCES.md', 'w') as f:
    f.write("# Component References\n\n")
    for c in components:
        f.write(f"- [{c.__name__}](#{c.__name__})\n")
    for c in components:
        print(c.__name__)
        f.write(f"\n## {c.__name__}\n\n")
        f.write(f"```python\n{create_signature(c)}\n```\n\n")
        f.write(c.__doc__ + '\n\n')
        f.write("[Back to menu](#components-reference)\n\n")