# AUTO GENERATED FILE - DO NOT EDIT

vtkGeometryRepresentation <- function(children=NULL, id=NULL, actor=NULL, colorDataRange=NULL, colorMapPreset=NULL, cubeAxesStyle=NULL, mapper=NULL, property=NULL, showCubeAxes=NULL) {
    
    props <- list(children=children, id=id, actor=actor, colorDataRange=colorDataRange, colorMapPreset=colorMapPreset, cubeAxesStyle=cubeAxesStyle, mapper=mapper, property=property, showCubeAxes=showCubeAxes)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'GeometryRepresentation',
        namespace = 'dash_vtk',
        propNames = c('children', 'id', 'actor', 'colorDataRange', 'colorMapPreset', 'cubeAxesStyle', 'mapper', 'property', 'showCubeAxes'),
        package = 'dashVtk'
        )

    structure(component, class = c('dash_component', 'list'))
}
