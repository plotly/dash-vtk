% Auto-generated: do not edit by hand
\name{vtkPolyData}

\alias{vtkPolyData}

\title{PolyData component}

\description{
PolyData is exposing a vtkPolyData to a downstream filter It takes the following set of properties:   - points: [x, y, z, x, y, z, ...],   - verts: [cellSize, pointId0, pointId1, ..., cellSize, pointId0, ...]   - lines: [cellSize, pointId0, pointId1, ..., cellSize, pointId0, ...]   - polys: [cellSize, pointId0, pointId1, ..., cellSize, pointId0, ...]   - strips: [cellSize, pointId0, pointId1, ..., cellSize, pointId0, ...] Cell connectivity helper property:   - connectivity: 'manual', // [manual, points, triangles, strips]
}

\usage{
vtkPolyData(children=NULL, id=NULL, connectivity=NULL, lines=NULL,
points=NULL, polys=NULL, port=NULL, strips=NULL, verts=NULL)
}

\arguments{
\item{children}{List of a list of or a singular dash component, string or numbers | a list of or a singular dash component, string or number. }

\item{id}{Character. The ID used to identify this component.}

\item{connectivity}{Character. Type of connectivity `manual` or implicit such as `points`, `triangles`, `strips`}

\item{lines}{List of numerics. lines cells}

\item{points}{List of numerics. xyz coordinates}

\item{polys}{List of numerics. polys cells}

\item{port}{Numeric. downstream connection port}

\item{strips}{List of numerics. strips cells}

\item{verts}{List of numerics. verts cells}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

