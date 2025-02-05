# AUTO GENERATED FILE - DO NOT EDIT

#' @export
vtkReader <- function(children=NULL, id=NULL, parseAsArrayBuffer=NULL, parseAsText=NULL, port=NULL, renderOnUpdate=NULL, resetCameraOnUpdate=NULL, url=NULL, vtkClass=NULL) {
    
    props <- list(children=children, id=id, parseAsArrayBuffer=parseAsArrayBuffer, parseAsText=parseAsText, port=port, renderOnUpdate=renderOnUpdate, resetCameraOnUpdate=resetCameraOnUpdate, url=url, vtkClass=vtkClass)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Reader',
        namespace = 'dash_vtk',
        propNames = c('children', 'id', 'parseAsArrayBuffer', 'parseAsText', 'port', 'renderOnUpdate', 'resetCameraOnUpdate', 'url', 'vtkClass'),
        package = 'dashVtk'
        )

    structure(component, class = c('dash_component', 'list'))
}
