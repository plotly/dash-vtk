# AUTO GENERATED FILE - DO NOT EDIT

vtkView <- function(children=NULL, id=NULL, style=NULL, className=NULL, background=NULL, interactorSettings=NULL, cameraPosition=NULL, cameraViewUp=NULL, cameraParallelProjection=NULL, triggerRender=NULL, triggerResetCamera=NULL, pickingModes=NULL, clickInfo=NULL, hoverInfo=NULL) {
    
    props <- list(children=children, id=id, style=style, className=className, background=background, interactorSettings=interactorSettings, cameraPosition=cameraPosition, cameraViewUp=cameraViewUp, cameraParallelProjection=cameraParallelProjection, triggerRender=triggerRender, triggerResetCamera=triggerResetCamera, pickingModes=pickingModes, clickInfo=clickInfo, hoverInfo=hoverInfo)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'View',
        namespace = 'dash_vtk',
        propNames = c('children', 'id', 'style', 'className', 'background', 'interactorSettings', 'cameraPosition', 'cameraViewUp', 'cameraParallelProjection', 'triggerRender', 'triggerResetCamera', 'pickingModes', 'clickInfo', 'hoverInfo'),
        package = 'dashVtk'
        )

    structure(component, class = c('dash_component', 'list'))
}
