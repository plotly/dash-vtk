# AUTO GENERATED FILE - DO NOT EDIT

#' @export
vtkView <- function(children=NULL, id=NULL, background=NULL, cameraParallelProjection=NULL, cameraPosition=NULL, cameraViewUp=NULL, className=NULL, clickInfo=NULL, hoverInfo=NULL, interactorSettings=NULL, pickingModes=NULL, showOrientationAxes=NULL, style=NULL, triggerRender=NULL, triggerResetCamera=NULL) {
    
    props <- list(children=children, id=id, background=background, cameraParallelProjection=cameraParallelProjection, cameraPosition=cameraPosition, cameraViewUp=cameraViewUp, className=className, clickInfo=clickInfo, hoverInfo=hoverInfo, interactorSettings=interactorSettings, pickingModes=pickingModes, showOrientationAxes=showOrientationAxes, style=style, triggerRender=triggerRender, triggerResetCamera=triggerResetCamera)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'View',
        namespace = 'dash_vtk',
        propNames = c('children', 'id', 'background', 'cameraParallelProjection', 'cameraPosition', 'cameraViewUp', 'className', 'clickInfo', 'hoverInfo', 'interactorSettings', 'pickingModes', 'showOrientationAxes', 'style', 'triggerRender', 'triggerResetCamera'),
        package = 'dashVtk'
        )

    structure(component, class = c('dash_component', 'list'))
}
