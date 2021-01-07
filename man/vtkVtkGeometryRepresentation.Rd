% Auto-generated: do not edit by hand
\name{vtkVtkGeometryRepresentation}

\alias{vtkVtkGeometryRepresentation}

\title{VtkGeometryRepresentation component}

\description{
VtkGeometryRepresentation is responsible to convert a vtkPolyData into rendering It takes the following set of properties:   - colorBy: ['POINTS', ''],   - pointSize: 1,   - color: [1,1,1], It provides the following properties to its children:   - 'representation`: this   - `downstream` == `mapper` which should be used to call setInputConnection/setInputData
}

\usage{
vtkVtkGeometryRepresentation(children=NULL, id=NULL, colorBy=NULL, pointSize=NULL,
color=NULL, view=NULL)
}

\arguments{
\item{children}{List of a list of or a singular dash component, string or numbers | a list of or a singular dash component, string or number. List of representation to show}

\item{id}{Character. The ID used to identify this component in Dash callbacks.}

\item{colorBy}{List of characters. Choose which array to color the output with.
- ['pointData', 'temperature']
- ['cellData', 'pressure']}

\item{pointSize}{Numeric. pointSize for vertex rendering}

\item{color}{List of numerics. When no colorBy array is provided use provided solid color}

\item{view}{Named list. }
}

\value{named list of JSON elements corresponding to React.js properties and their values}

