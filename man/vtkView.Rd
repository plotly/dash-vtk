% Auto-generated: do not edit by hand
\name{vtkView}

\alias{vtkView}

\title{View component}

\description{
View is responsible to render vtk.js data. It takes the following set of properties:   - `background`: [0.2, 0.3, 0.4]   - `cameraPosition`: [0, 0, 1]   - `cameraViewUp`: [0, 1, 0]   - `cameraParallelProjection`: false   - `showOrientationAxes`: true
}

\usage{
vtkView(children=NULL, id=NULL, background=NULL,
cameraParallelProjection=NULL, cameraPosition=NULL,
cameraViewUp=NULL, className=NULL, clickInfo=NULL,
hoverInfo=NULL, interactorSettings=NULL, pickingModes=NULL,
showOrientationAxes=NULL, style=NULL, triggerRender=NULL,
triggerResetCamera=NULL)
}

\arguments{
\item{children}{List of a list of or a singular dash component, string or numbers | a list of or a singular dash component, string or number. List of representation to show}

\item{id}{Character. The ID used to identify this component.}

\item{background}{Unnamed list. The color of the view background using 3 floating numbers
between 0-1 of Red, Green, Blue component.}

\item{cameraParallelProjection}{Logical. Use parallel projection (default: false)}

\item{cameraPosition}{Unnamed list. Initial camera position from an object in [0,0,0]}

\item{cameraViewUp}{Unnamed list. Initial camera position from an object in [0,0,0]}

\item{className}{Character. Allow user to provide custom className associated to root element}

\item{clickInfo}{Named list. Read-only prop. To use this, make sure that `pickingModes` contains `click`.
This prop is updated when an element in the map is clicked. This contains
the picking info describing the object being clicked on.}

\item{hoverInfo}{Named list. Read-only prop. To use this, make sure that `pickingModes` contains `hover`.
This prop is updated when an element in the map is hovered. This contains
the picking info describing the object being hovered.}

\item{interactorSettings}{Unnamed list. Configure the interactions}

\item{pickingModes}{List of characters. List of picking listeners to bind. The supported values are `click` and `hover`. By default it is disabled (empty array).}

\item{showOrientationAxes}{Logical. Show/Hide orientation axes.}

\item{style}{Named list. Allow user to override the default View style { width: '100\%', height: '100\%' }}

\item{triggerRender}{Numeric. Property use to trigger a render when changing.}

\item{triggerResetCamera}{Numeric. Property use to trigger a resetCamera when changing.}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

