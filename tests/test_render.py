import os
import time
import warnings


from dash.testing.application_runners import import_app


def take_snapshot(dash_duo, name):
    target = "/tmp/dash_artifacts" if not dash_duo._is_windows() else os.getenv("TEMP")
    try:
        os.makedirs(target, exist_ok=True)
    except OSError:
        warnings.warn("Unable to create the target directory", OSError)

    dash_duo.driver.save_screenshot("{}/{}.png".format(target, name))


names = [
    "usage",
    "demos.pyvista-terrain-following-mesh.app",
    "demos.pyvista-point-cloud.app",
    "demos.dicom-ct-lung.app",
    "demos.dicom-mri-brain.app",
    "demos.dicom-mri-pancreas.app",
    "demos.slice-rendering.app",
    "demos.volume-rendering.app",
    "demos.usage-vtk-cfd.app",
    "demos.usage-algorithm.app",
    "demos.synthetic-volume-rendering.app",
]

tutorials = [
    "docs.tutorials.t04_algorithm",
    "docs.tutorials.t05_reader",
    "docs.tutorials.s02_mesh_field",
    "docs.tutorials.s05_volume_slice",
    "docs.tutorials.t01_volume_rendering",
    "docs.tutorials.s04_slice",
    "docs.tutorials.s03_volume",
    "docs.tutorials.t03_polydata",
    "docs.tutorials.s01_mesh",
    "docs.tutorials.s00_point_cloud",
    "docs.tutorials.s06_vtk_mesh",
    "docs.tutorials.t02_imagedata",
    "docs.tutorials.t00_geometry_rendering",
    "docs.tutorials.t06_shared_dataset",
    "docs.tutorials.s07_vtk_volume",
]


def build_test(name, sleep=10):
    def test_fn(dash_duo):
        app = import_app(name)
        dash_duo.start_server(app)
        dash_duo.wait_for_element("canvas", timeout=30)
        time.sleep(sleep)
        take_snapshot(dash_duo, name.replace("demos.", ""))
        dash_duo.percy_snapshot(name)

    return test_fn


for n in names:
    var_name = "test_" + n.replace("-", "_").replace("demos.", "").replace(".app", "")
    locals()[var_name] = build_test(n, sleep=20)

for n in tutorials:
    var_name = "test_" + n
    locals()[var_name] = build_test(n, sleep=5)