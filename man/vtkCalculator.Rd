% Auto-generated: do not edit by hand
\name{vtkCalculator}

\alias{vtkCalculator}

\title{Calculator component}

\description{
Calculator is exposing a source or filter to a downstream filter It takes the following set of properties:   - name: 'scalars'    // name of the generated field   - location: 'POINT'  // POINT/CELL   - arrays: []         // Name of array to have access in formula   - formula: fn
}

\usage{
vtkCalculator(children=NULL, id=NULL, arrays=NULL, formula=NULL,
location=NULL, name=NULL, port=NULL)
}

\arguments{
\item{children}{List of a list of or a singular dash component, string or numbers | a list of or a singular dash component, string or number. }

\item{id}{Character. The ID used to identify this component.}

\item{arrays}{List of characters. List of fields you want available for your formula}

\item{formula}{Field formula}

\item{location}{Character. Field location [POINT, CELL, COORDINATE, SCALARS, ]}

\item{name}{Character. Field name}

\item{port}{Numeric. downstream connection port}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

