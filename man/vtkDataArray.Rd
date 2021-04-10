% Auto-generated: do not edit by hand
\name{vtkDataArray}

\alias{vtkDataArray}

\title{DataArray component}

\description{
DataArray is creating a vtkDataArray for the container fields It takes the following set of properties:   - type: 'Float32Array', 'Float64Array', 'Uint16Array', ...   - values: [number, number, ...]   - numberOfComponents: 1,   - registration: 'addArray', 'setScalars', ...
}

\usage{
vtkDataArray(id=NULL, name=NULL, numberOfComponents=NULL,
registration=NULL, type=NULL, values=NULL)
}

\arguments{
\item{id}{Character. The ID used to identify this component.}

\item{name}{Character. Field name}

\item{numberOfComponents}{Numeric. Number of components / Tuple size}

\item{registration}{Character. Name of the method to call on the fieldData (addArray, setScalars, setVectors...)}

\item{type}{Character. Typed array name}

\item{values}{List of numerics. Actual values to use inside our array}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

