% Auto-generated: do not edit by hand
\name{vtkVolume}

\alias{vtkVolume}

\title{Volume component}

\description{
Volume is exposing a vtkImageData to a downstream filter It takes the following set of properties:   - state: { image: { ...imagedata-props }, field: { ...dataArray } }
}

\usage{
vtkVolume(id=NULL, port=NULL, state=NULL)
}

\arguments{
\item{id}{Character. The ID used to identify this component.}

\item{port}{Numeric. downstream connection port}

\item{state}{Named list. State of the volume}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

