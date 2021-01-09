% Auto-generated: do not edit by hand
\name{vtkVtkReader}

\alias{vtkVtkReader}

\title{VtkReader component}

\description{
VtkReader is exposing a reader to a downstream filter It takes the following set of properties:   - vtkClass: vtk.js reader class name   - url: string   - parseAsText: string   - parseAsArrayBuffer: base64String
}

\usage{
vtkVtkReader(children=NULL, id=NULL, port=NULL, vtkClass=NULL, url=NULL,
parseAsText=NULL, parseAsArrayBuffer=NULL,
renderOnUpdate=NULL, resetCameraOnUpdate=NULL)
}

\arguments{
\item{children}{List of a list of or a singular dash component, string or numbers | a list of or a singular dash component, string or number. }

\item{id}{Character. The ID used to identify this component in Dash callbacks.}

\item{port}{Numeric. downstream connection port}

\item{vtkClass}{Character. vtkClass name}

\item{url}{Character. set of url to fetch data from}

\item{parseAsText}{Character. set text data to process}

\item{parseAsArrayBuffer}{Character. set binary data to process from base64 string}

\item{renderOnUpdate}{Logical. Automatically render on data loaded}

\item{resetCameraOnUpdate}{Logical. Automatically reset camera on data loaded}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

