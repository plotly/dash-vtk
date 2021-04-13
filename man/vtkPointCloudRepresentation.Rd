% Auto-generated: do not edit by hand
\name{vtkPointCloudRepresentation}

\alias{vtkPointCloudRepresentation}

\title{PointCloudRepresentation component}

\description{
PointCloudRepresentation expect the following set of properties   - xyz: [x0, y0, z0, x1, ..., zn]   - rgb: [...]   - rgba: [...]   - scalars: [...]
}

\usage{
vtkPointCloudRepresentation(colorDataRange=NULL, colorMapPreset=NULL, property=NULL,
rgb=NULL, rgba=NULL, scalars=NULL, xyz=NULL)
}

\arguments{
\item{colorDataRange}{List of numerics. Data range use for the colorMap}

\item{colorMapPreset}{Character. Preset name for the lookup table color map}

\item{property}{Named list. Properties to set to the actor.property}

\item{rgb}{List of numerics. Use RGB values to attach to the points/vertex}

\item{rgba}{List of numerics. Use RGBA values to attach to the points/vertex}

\item{scalars}{List of numerics. Field values to attach to the points}

\item{xyz}{List of numerics. Points coordinates}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

