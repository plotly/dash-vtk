% Auto-generated: do not edit by hand
\name{vtkVolumeDataRepresentation}

\alias{vtkVolumeDataRepresentation}

\title{VolumeDataRepresentation component}

\description{
VolumeDataRepresentation expect the following set of properties   - dimensions: [10, 20, 5]   - spacing: [1, 1, 1]   - origin: [0, 0, 0]   - rgb: [...]   - rgba: [...]   - scalars: [...]   - scalarsType: Float32Array
}

\usage{
vtkVolumeDataRepresentation(id=NULL, colorDataRange=NULL, colorMapPreset=NULL,
controllerSize=NULL, dimensions=NULL, mapper=NULL,
origin=NULL, property=NULL, rescaleColorMap=NULL, rgb=NULL,
rgba=NULL, scalars=NULL, scalarsType=NULL, spacing=NULL,
volume=NULL, volumeController=NULL)
}

\arguments{
\item{id}{Character. The ID used to identify this component.}

\item{colorDataRange}{List of numerics | character. Data range use for the colorMap}

\item{colorMapPreset}{Character. Preset name for the lookup table color map}

\item{controllerSize}{List of numerics. Controller size in pixels}

\item{dimensions}{List of numerics. Number of points along x, y, z}

\item{mapper}{Named list. Properties to set to the mapper}

\item{origin}{List of numerics. World coordinate of the lower left corner of your vtkImageData (i=0, j=0, k=0).}

\item{property}{Named list. Properties to set to the volume.property}

\item{rescaleColorMap}{Logical. Use opacity range to rescale color map}

\item{rgb}{List of numerics. Use RGB values to attach to the points/vertex}

\item{rgba}{List of numerics. Use RGBA values to attach to the points/vertex}

\item{scalars}{List of numerics. Field values to attach to the points}

\item{scalarsType}{Character. Types of numbers provided in scalars}

\item{spacing}{List of numerics. Spacing along x, y, z between points in world coordinates}

\item{volume}{Named list. Properties to set to the volume}

\item{volumeController}{Logical. Show volumeController}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

