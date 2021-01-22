% Auto-generated: do not edit by hand
\name{vtkImageData}

\alias{vtkImageData}

\title{ImageData component}

\description{
ImageData is exposing a vtkImageData to a downstream filter It takes the following set of properties:   - dimensions: [nx, ny, nz],   - origin: [0, 0, 0]   - spacing: [1, 1, 1]
}

\usage{
vtkImageData(children=NULL, id=NULL, port=NULL, dimensions=NULL,
spacing=NULL, origin=NULL)
}

\arguments{
\item{children}{List of a list of or a singular dash component, string or numbers | a list of or a singular dash component, string or number. }

\item{id}{Character. The ID used to identify this component.}

\item{port}{Numeric. downstream connection port}

\item{dimensions}{List of numerics. Number of points along x, y, z}

\item{spacing}{List of numerics. Spacing along x, y, z between points in world coordinates}

\item{origin}{List of numerics. World coordinate of the lower left corner of your vtkImageData (i=0, j=0, k=0).}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

