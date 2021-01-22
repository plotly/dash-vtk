# AUTO GENERATED FILE - DO NOT EDIT

vtkGeometryRepresentation <- function(children=NULL, id=NULL, actor=NULL, mapper=NULL, property=NULL, colorMapPreset=NULL, colorDataRange=NULL) {
    
    props <- list(children=children, id=id, actor=actor, mapper=mapper, property=property, colorMapPreset=colorMapPreset, colorDataRange=colorDataRange)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'GeometryRepresentation',
        namespace = 'dash_vtk',
        propNames = c('children', 'id', 'actor', 'mapper', 'property', 'colorMapPreset', 'colorDataRange'),
        package = 'dashVtk'
        )

    structure(component, class = c('dash_component', 'list'))
}
