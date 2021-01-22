% Auto-generated: do not edit by hand
\name{vtkSliceRepresentation}

\alias{vtkSliceRepresentation}

\title{SliceRepresentation component}

\description{
SliceRepresentation is responsible to convert a vtkPolyData into rendering It takes the following set of properties:   - colorBy: ['POINTS', ''],   - pointSize: 1,   - color: [1,1,1],
}

\usage{
vtkSliceRepresentation(children=NULL, id=NULL, mapper=NULL, actor=NULL,
property=NULL, colorMapPreset=NULL, colorDataRange=NULL,
iSlice=NULL, jSlice=NULL, kSlice=NULL, xSlice=NULL,
ySlice=NULL, zSlice=NULL)
}

\arguments{
\item{children}{List of a list of or a singular dash component, string or numbers | a list of or a singular dash component, string or number. }

\item{id}{Character. The ID used to identify this component.}

\item{mapper}{Named list. Properties to set to the mapper}

\item{actor}{Named list. Properties to set to the slice/actor}

\item{property}{Named list. Properties to set to the volume.property}

\item{colorMapPreset}{Character. Preset name for the lookup table color map}

\item{colorDataRange}{List of numerics | character. Data range use for the colorMap}

\item{iSlice}{Numeric. index of the slice along i}

\item{jSlice}{Numeric. index of the slice along j}

\item{kSlice}{Numeric. index of the slice along k}

\item{xSlice}{Numeric. index of the slice along x}

\item{ySlice}{Numeric. index of the slice along y}

\item{zSlice}{Numeric. index of the slice along z}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

