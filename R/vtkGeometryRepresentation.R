# AUTO GENERATED FILE - DO NOT EDIT

#' @export
vtkGeometryRepresentation <- function(children=NULL, id=NULL, actor=NULL, colorDataRange=NULL, colorMapPreset=NULL, cubeAxesStyle=NULL, mapper=NULL, property=NULL, scalarBarStyle=NULL, scalarBarTitle=NULL, showCubeAxes=NULL, showScalarBar=NULL) {
    
    props <- list(children=children, id=id, actor=actor, colorDataRange=colorDataRange, colorMapPreset=colorMapPreset, cubeAxesStyle=cubeAxesStyle, mapper=mapper, property=property, scalarBarStyle=scalarBarStyle, scalarBarTitle=scalarBarTitle, showCubeAxes=showCubeAxes, showScalarBar=showScalarBar)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'GeometryRepresentation',
        namespace = 'dash_vtk',
        propNames = c('children', 'id', 'actor', 'colorDataRange', 'colorMapPreset', 'cubeAxesStyle', 'mapper', 'property', 'scalarBarStyle', 'scalarBarTitle', 'showCubeAxes', 'showScalarBar'),
        package = 'dashVtk'
        )

    structure(component, class = c('dash_component', 'list'))
}
