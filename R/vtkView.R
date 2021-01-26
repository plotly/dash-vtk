# AUTO GENERATED FILE - DO NOT EDIT

vtkView <- function(children=NULL, id=NULL, background=NULL, interactorSettings=NULL, cameraPosition=NULL, cameraViewUp=NULL, cameraParallelProjection=NULL) {
    
    props <- list(children=children, id=id, background=background, interactorSettings=interactorSettings, cameraPosition=cameraPosition, cameraViewUp=cameraViewUp, cameraParallelProjection=cameraParallelProjection)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'View',
        namespace = 'dash_vtk',
        propNames = c('children', 'id', 'background', 'interactorSettings', 'cameraPosition', 'cameraViewUp', 'cameraParallelProjection'),
        package = 'dashVtk'
        )

    structure(component, class = c('dash_component', 'list'))
}