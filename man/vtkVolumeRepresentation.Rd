% Auto-generated: do not edit by hand
\name{vtkVolumeRepresentation}

\alias{vtkVolumeRepresentation}

\title{VolumeRepresentation component}

\description{
VolumeRepresentation is responsible to convert a vtkPolyData into rendering It takes the following set of properties:   - colorBy: ['POINTS', ''],   - pointSize: 1,   - color: [1,1,1],
}

\usage{
vtkVolumeRepresentation(children=NULL, id=NULL, colorDataRange=NULL,
colorMapPreset=NULL, mapper=NULL, property=NULL, volume=NULL)
}

\arguments{
\item{children}{List of a list of or a singular dash component, string or numbers | a list of or a singular dash component, string or number. }

\item{id}{Character. The ID used to identify this component.}

\item{colorDataRange}{List of numerics | character. Data range use for the colorMap}

\item{colorMapPreset}{Character. Preset name for the lookup table color map}

\item{mapper}{Named list. Properties to set to the mapper}

\item{property}{Named list. Properties to set to the volume.property}

\item{volume}{Named list. Properties to set to the volume}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

