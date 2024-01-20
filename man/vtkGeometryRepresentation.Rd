% Auto-generated: do not edit by hand
\name{vtkGeometryRepresentation}

\alias{vtkGeometryRepresentation}

\title{GeometryRepresentation component}

\description{
GeometryRepresentation is responsible to convert a vtkPolyData into rendering It takes the following set of properties:   - actor: Properties to assign to the vtkActor   - mapper: Properties to assign to the vtkMapper   - property: Properties to assign to the vtkProperty (actor.getProperty())   - colorMapPreset: Name of the preset to use for controlling the color mapping   - colorDataRange: Range to use for the color scale
}

\usage{
vtkGeometryRepresentation(children=NULL, id=NULL, actor=NULL, colorDataRange=NULL,
colorMapPreset=NULL, cubeAxesStyle=NULL, mapper=NULL,
property=NULL, scalarBarStyle=NULL, scalarBarTitle=NULL,
showCubeAxes=NULL, showScalarBar=NULL)
}

\arguments{
\item{children}{List of a list of or a singular dash component, string or numbers | a list of or a singular dash component, string or number. }

\item{id}{Character. The ID used to identify this component.}

\item{actor}{Named list. Properties to set to the actor}

\item{colorDataRange}{List of numerics. Data range use for the colorMap}

\item{colorMapPreset}{Character. Preset name for the lookup table color map}

\item{cubeAxesStyle}{Named list. Configure cube Axes style by overriding the set of properties defined
https://github.com/Kitware/vtk-js/blob/HEAD/Sources/Rendering/Core/CubeAxesActor/index.js#L703-L719}

\item{mapper}{Named list. Properties to set to the actor}

\item{property}{Named list. Properties to set to the actor.property}

\item{scalarBarStyle}{Named list. Configure scalar bar style by overriding the set of properties defined
https://github.com/Kitware/vtk-js/blob/master/Sources/Rendering/Core/ScalarBarActor/index.js#L776-L796}

\item{scalarBarTitle}{Character. Use given string as title for scalar bar. By default it is empty (no title).}

\item{showCubeAxes}{Logical. Show/Hide Cube Axes for the given representation}

\item{showScalarBar}{Logical. Show hide scalar bar for that representation}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

