% Auto-generated: do not edit by hand
\name{vtkVtkDataArray}

\alias{vtkVtkDataArray}

\title{VtkDataArray component}

\description{
VtkDataArray is creating a vtkDataArray for the container fields It takes the following set of properties:   - type: 'Float32Array', 'Float64Array', 'Uint16Array', ...   - values: [number, number, ...]   - numberOfComponents: 1,   - registration: 'addArray', 'setScalars', ...
}

\usage{
vtkVtkDataArray(id=NULL, type=NULL, name=NULL, values=NULL,
numberOfComponents=NULL, registration=NULL)
}

\arguments{
\item{id}{Character. The ID used to identify this component in Dash callbacks.}

\item{type}{Character. Typed array name}

\item{name}{Character. Field name}

\item{values}{List of numerics. Actual values to use inside our array}

\item{numberOfComponents}{Numeric. Number of components / Tuple size}

\item{registration}{Character. Name of the method to call on the fieldData (addArray, setScalars, setVectors...)}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

