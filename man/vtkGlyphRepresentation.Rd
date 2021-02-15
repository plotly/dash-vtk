% Auto-generated: do not edit by hand
\name{vtkGlyphRepresentation}

\alias{vtkGlyphRepresentation}

\title{GlyphRepresentation component}

\description{
GlyphRepresentation using a source on port=1 as Glyph and the points of the source on port=0 to position the given glyphs It takes the following set of properties: - actor: Properties to assign to the vtkActor - mapper: Properties to assign to the vtkGlyph3DMapper - property: Properties to assign to the vtkProperty (actor.getProperty()) - colorMapPreset: Name of the preset to use for controlling the color mapping - colorDataRange: Range to use for the color scale
}

\usage{
vtkGlyphRepresentation(children=NULL, id=NULL, actor=NULL, mapper=NULL,
property=NULL, colorMapPreset=NULL, colorDataRange=NULL)
}

\arguments{
\item{children}{List of a list of or a singular dash component, string or numbers | a list of or a singular dash component, string or number. }

\item{id}{Character. The ID used to identify this component.}

\item{actor}{Named list. Properties to set to the actor}

\item{mapper}{Named list. Properties to set to the vtkGlyph3DMapper}

\item{property}{Named list. Properties to set to the actor.property}

\item{colorMapPreset}{Character. Preset name for the lookup table color map}

\item{colorDataRange}{List of numerics. Data range use for the colorMap}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

