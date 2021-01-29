% Auto-generated: do not edit by hand
\name{vtkMesh}

\alias{vtkMesh}

\title{Mesh component}

\description{
Mesh is exposing a vtkPolyData to a downstream filter It takes the following set of properties:   - state: { mesh: { ...polydata-props }, field: { ...dataArray } }
}

\usage{
vtkMesh(id=NULL, port=NULL, state=NULL)
}

\arguments{
\item{id}{Character. The ID used to identify this component.}

\item{port}{Numeric. downstream connection port}

\item{state}{Named list. State of the mesh}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

