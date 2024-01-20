# AUTO GENERATED FILE - DO NOT EDIT

#' @export
vtkGlyphRepresentation <- function(children=NULL, id=NULL, actor=NULL, colorDataRange=NULL, colorMapPreset=NULL, mapper=NULL, property=NULL) {
    
    props <- list(children=children, id=id, actor=actor, colorDataRange=colorDataRange, colorMapPreset=colorMapPreset, mapper=mapper, property=property)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'GlyphRepresentation',
        namespace = 'dash_vtk',
        propNames = c('children', 'id', 'actor', 'colorDataRange', 'colorMapPreset', 'mapper', 'property'),
        package = 'dashVtk'
        )

    structure(component, class = c('dash_component', 'list'))
}
