# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.0.7] - 2021-04-06

### Added

* Adding picking capabilities
* Adding CubeAxes on GeometryRepresentation

### Fixed
* fix bug when using cell data with `to_mesh_state`

## [0.0.6] - 2021-02-22

### Fixed
* fix(react-vtk-js): fix dynamic handling of DataArray update

### Changed
* update to react-vtk-js 1.1.4
* doc(View): Update props to include style/className

## [0.0.5] - 2021-02-15

### Added
* 3 new demos using dicom (#24)
* GlyphRepresentation

### Changed
* Added `vtk` to `setup.py`'s install requires.

### Fixed
* VolumeDataRepresentation typo
* GIF URL in README.md


## [0.0.4] - 2021-02-08

### Changed
* Added section about deployment in `README.md`
* `dash_vtk.utils`: Will try to import `vtkmodules` (`>=9.0.1`) before falling back to `vtk` (`<=8.1.2`) to avoid requiring `libGL`.

## [0.0.3] - 2021-02-04

### Changed
* [Demos](https://github.com/plotly/dash-vtk/pull/16): removed headers, updated layout sizes, remove unused files
* `demos/usage-vtk-cfd`: update viz on drag
* `demos/pyvista-point-cloud`: faster loading by lowering sampling
* `demos/slice-rendering`: faster loading by removing volume rendering
* `README.md`: Change relative links to URLs
* `docs/CONTRIBUTING.md` ([commit](https://github.com/plotly/dash-vtk/pull/15/commits/0ec656e20b7e34e77bab7c573748e2842eba0d5f)): Various clarification and improvements

## Fixed
* Simplified imports in `dash_vtk.utils.vtk` to only load necessary modules from `vtk`. This avoids `libGL.so.1` since server side rendering is not needed.

## [0.0.2] - 2021-01-29

### Added

* PyPi description auto-generated from `README.md`

### Changed
* Use `package.json`'s files instead of `npmignore`
* Change order of instructions in  `docs/CONTRIBUTING.md`

### Fixed
* Update `setup.py` to include `utils` directory when upload to PyPi.


## [0.0.1] - 2021-01-29

This is the initial release.
