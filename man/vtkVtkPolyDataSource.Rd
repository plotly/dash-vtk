% Auto-generated: do not edit by hand
\name{vtkVtkPolyDataSource}

\alias{vtkVtkPolyDataSource}

\title{VtkPolyDataSource component}

\description{
VtkPolyDataSource is exposing a polydata to a downstream filter or representation It takes the following set of properties:   - points: [x, y, z, x, y, z, ...],   - verts: [cellSize, pointId0, pointId1, ..., cellSize, pointId0, ...]   - lines: [cellSize, pointId0, pointId1, ..., cellSize, pointId0, ...]   - polys: [cellSize, pointId0, pointId1, ..., cellSize, pointId0, ...]   - strips: [cellSize, pointId0, pointId1, ..., cellSize, pointId0, ...]   - pointCloud: false/true (if on it will generate verts automatically) It provides the following properties to its children:   - pass along: 'view', 'representation`, `setProps`   - `dataset` == `this.dataset`
}

\usage{
vtkVtkPolyDataSource(children=NULL, id=NULL, port=NULL, points=NULL, verts=NULL,
lines=NULL, polys=NULL, strips=NULL, pointCloud=NULL,
view=NULL, representation=NULL)
}

\arguments{
\item{children}{List of a list of or a singular dash component, string or numbers | a list of or a singular dash component, string or number. List of representation to show}

\item{id}{Character. The ID used to identify this component in Dash callbacks.}

\item{port}{Numeric. downstream connection port}

\item{points}{List of numerics. xyz coordinates}

\item{verts}{List of numerics. verts cells}

\item{lines}{List of numerics. lines cells}

\item{polys}{List of numerics. polys cells}

\item{strips}{List of numerics. strips cells}

\item{pointCloud}{Logical. Is it point cloud}

\item{view}{Named list. }

\item{representation}{Named list. }
}

\value{named list of JSON elements corresponding to React.js properties and their values}

