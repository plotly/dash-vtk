% Auto-generated: do not edit by hand
\name{vtkVtkFieldData}

\alias{vtkVtkFieldData}

\title{VtkFieldData component}

\description{
VtkFieldData is exposing a vtkFieldData to a downstream element It provides the following properties to its children:   - pass along: 'view', 'representation`, `setProps`   - `fields` == `vtkFieldData`
}

\usage{
vtkVtkFieldData(children=NULL, id=NULL, view=NULL, representation=NULL,
dataset=NULL)
}

\arguments{
\item{children}{List of a list of or a singular dash component, string or numbers | a list of or a singular dash component, string or number. List of representation to show}

\item{id}{Character. The ID used to identify this component in Dash callbacks.}

\item{view}{Named list. }

\item{representation}{Named list. }

\item{dataset}{Named list. }
}

\value{named list of JSON elements corresponding to React.js properties and their values}

