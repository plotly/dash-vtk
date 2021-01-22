% Auto-generated: do not edit by hand
\name{vtkPolyData}

\alias{vtkPolyData}

\title{PolyData component}

\description{
PolyData is exposing a vtkPolyData to a downstream filter It takes the following set of properties:   - points: [x, y, z, x, y, z, ...],   - verts: [cellSize, pointId0, pointId1, ..., cellSize, pointId0, ...]   - lines: [cellSize, pointId0, pointId1, ..., cellSize, pointId0, ...]   - polys: [cellSize, pointId0, pointId1, ..., cellSize, pointId0, ...]   - strips: [cellSize, pointId0, pointId1, ..., cellSize, pointId0, ...] Cell connectivity helper property:   - connectivity: 'manual', // [manual, points, triangles, strips]
}

\usage{
vtkPolyData(children=NULL, id=NULL, port=NULL, points=NULL, verts=NULL,
lines=NULL, polys=NULL, strips=NULL, connectivity=NULL)
}

\arguments{
\item{children}{List of a list of or a singular dash component, string or numbers | a list of or a singular dash component, string or number. }

\item{id}{Character. The ID used to identify this component.}

\item{port}{Numeric. downstream connection port}

\item{points}{List of numerics. xyz coordinates}

\item{verts}{List of numerics. verts cells}

\item{lines}{List of numerics. lines cells}

\item{polys}{List of numerics. polys cells}

\item{strips}{List of numerics. strips cells}

\item{connectivity}{Character. Type of connectivity `manual` or implicit such as `points`, `triangles`, `strips`}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

