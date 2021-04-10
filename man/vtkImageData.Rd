% Auto-generated: do not edit by hand
\name{vtkImageData}

\alias{vtkImageData}

\title{ImageData component}

\description{
ImageData is exposing a vtkImageData to a downstream filter It takes the following set of properties:   - dimensions: [nx, ny, nz],   - origin: [0, 0, 0]   - spacing: [1, 1, 1]   - direction: [       1, 0, 0,       0, 1, 0,       0, 0, 1     ]
}

\usage{
vtkImageData(children=NULL, id=NULL, dimensions=NULL, direction=NULL,
origin=NULL, port=NULL, spacing=NULL)
}

\arguments{
\item{children}{List of a list of or a singular dash component, string or numbers | a list of or a singular dash component, string or number. }

\item{id}{Character. The ID used to identify this component.}

\item{dimensions}{List of numerics. Number of points along x, y, z}

\item{direction}{List of numerics. 3x3 matrix use to orient the image data}

\item{origin}{List of numerics. World coordinate of the lower left corner of your vtkImageData (i=0, j=0, k=0).}

\item{port}{Numeric. downstream connection port}

\item{spacing}{List of numerics. Spacing along x, y, z between points in world coordinates}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

