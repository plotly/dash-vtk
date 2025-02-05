% Auto-generated: do not edit by hand
\name{vtkPointCloudRepresentation}

\alias{vtkPointCloudRepresentation}

\title{PointCloudRepresentation component}

\description{
PointCloudRepresentation expect the following set of properties   - xyz: [x0, y0, z0, x1, ..., zn]   - rgb: [...]   - rgba: [...]   - scalars: [...]
}

\usage{
vtkPointCloudRepresentation(id=NULL, colorDataRange=NULL, colorMapPreset=NULL,
cubeAxesStyle=NULL, property=NULL, rgb=NULL, rgba=NULL,
scalarBarStyle=NULL, scalarBarTitle=NULL, scalars=NULL,
showCubeAxes=NULL, showScalarBar=NULL, xyz=NULL)
}

\arguments{
\item{id}{Character. The ID used to identify this component.}

\item{colorDataRange}{List of numerics. Data range use for the colorMap}

\item{colorMapPreset}{Character. Preset name for the lookup table color map}

\item{cubeAxesStyle}{Named list. Configure cube Axes style by overriding the set of properties defined
https://github.com/Kitware/vtk-js/blob/HEAD/Sources/Rendering/Core/CubeAxesActor/index.js#L703-L719}

\item{property}{Named list. Properties to set to the actor.property}

\item{rgb}{List of numerics. Use RGB values to attach to the points/vertex}

\item{rgba}{List of numerics. Use RGBA values to attach to the points/vertex}

\item{scalarBarStyle}{Named list. Configure scalar bar style by overriding the set of properties defined
https://github.com/Kitware/vtk-js/blob/master/Sources/Rendering/Core/ScalarBarActor/index.js#L776-L796}

\item{scalarBarTitle}{Character. Use given string as title for scalar bar. By default it is empty (no title).}

\item{scalars}{List of numerics. Field values to attach to the points}

\item{showCubeAxes}{Logical. Show/Hide Cube Axes for the given representation}

\item{showScalarBar}{Logical. Show hide scalar bar for that representation}

\item{xyz}{List of numerics. Points coordinates}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

