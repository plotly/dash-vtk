% Auto-generated: do not edit by hand
\name{vtkVolumeDataRepresentation}

\alias{vtkVolumeDataRepresentation}

\title{VolumeDataRepresentation component}

\description{
VolumneDataRepresentation expect the following set of properties   - dimensions: [10, 20, 5]   - spacing: [1, 1, 1]   - origin: [0, 0, 0]   - rgb: [...]   - rgba: [...]   - scalars: [...]   - scalarsType: Float32Array
}

\usage{
vtkVolumeDataRepresentation(dimensions=NULL, spacing=NULL, origin=NULL, rgb=NULL,
rgba=NULL, scalars=NULL, scalarsType=NULL, mapper=NULL,
volume=NULL, property=NULL, colorMapPreset=NULL,
volumeController=NULL, controllerSize=NULL,
rescaleColorMap=NULL, colorDataRange=NULL)
}

\arguments{
\item{dimensions}{List of numerics. Number of points along x, y, z}

\item{spacing}{List of numerics. Spacing along x, y, z between points in world coordinates}

\item{origin}{List of numerics. World coordinate of the lower left corner of your vtkImageData (i=0, j=0, k=0).}

\item{rgb}{List of numerics. Use RGB values to attach to the points/vertex}

\item{rgba}{List of numerics. Use RGBA values to attach to the points/vertex}

\item{scalars}{List of numerics. Field values to attach to the points}

\item{scalarsType}{Character. Types of numbers provided in scalars}

\item{mapper}{Named list. Properties to set to the mapper}

\item{volume}{Named list. Properties to set to the volume}

\item{property}{Named list. Properties to set to the volume.property}

\item{colorMapPreset}{Character. Preset name for the lookup table color map}

\item{volumeController}{Logical. Show volumeController}

\item{controllerSize}{List of numerics. Controller size in pixels}

\item{rescaleColorMap}{Logical. Use opacity range to rescale color map}

\item{colorDataRange}{List of numerics | character. Data range use for the colorMap}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

