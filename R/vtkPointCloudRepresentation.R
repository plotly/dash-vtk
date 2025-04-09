# AUTO GENERATED FILE - DO NOT EDIT

#' @export
vtkPointCloudRepresentation <- function(id=NULL, colorDataRange=NULL, colorMapPreset=NULL, cubeAxesStyle=NULL, property=NULL, rgb=NULL, rgba=NULL, scalarBarStyle=NULL, scalarBarTitle=NULL, scalars=NULL, showCubeAxes=NULL, showScalarBar=NULL, xyz=NULL) {
    
    props <- list(id=id, colorDataRange=colorDataRange, colorMapPreset=colorMapPreset, cubeAxesStyle=cubeAxesStyle, property=property, rgb=rgb, rgba=rgba, scalarBarStyle=scalarBarStyle, scalarBarTitle=scalarBarTitle, scalars=scalars, showCubeAxes=showCubeAxes, showScalarBar=showScalarBar, xyz=xyz)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'PointCloudRepresentation',
        namespace = 'dash_vtk',
        propNames = c('id', 'colorDataRange', 'colorMapPreset', 'cubeAxesStyle', 'property', 'rgb', 'rgba', 'scalarBarStyle', 'scalarBarTitle', 'scalars', 'showCubeAxes', 'showScalarBar', 'xyz'),
        package = 'dashVtk'
        )

    structure(component, class = c('dash_component', 'list'))
}
