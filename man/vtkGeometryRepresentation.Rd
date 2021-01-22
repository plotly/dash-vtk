% Auto-generated: do not edit by hand
\name{vtkGeometryRepresentation}

\alias{vtkGeometryRepresentation}

\title{GeometryRepresentation component}

\description{
GeometryRepresentation is responsible to convert a vtkPolyData into rendering It takes the following set of properties:   - colorBy: ['POINTS', ''],   - pointSize: 1,   - color: [1,1,1],
}

\usage{
vtkGeometryRepresentation(children=NULL, id=NULL, actor=NULL, mapper=NULL,
property=NULL, colorMapPreset=NULL, colorDataRange=NULL)
}

\arguments{
\item{children}{List of a list of or a singular dash component, string or numbers | a list of or a singular dash component, string or number. }

\item{id}{Character. The ID used to identify this component.}

\item{actor}{Named list. Properties to set to the actor}

\item{mapper}{Named list. Properties to set to the actor}

\item{property}{Named list. Properties to set to the actor.property}

\item{colorMapPreset}{Character. Preset name for the lookup table color map}

\item{colorDataRange}{List of numerics. Data range use for the colorMap}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

