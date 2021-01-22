# AUTO GENERATED FILE - DO NOT EDIT

vtkReader <- function(children=NULL, id=NULL, port=NULL, vtkClass=NULL, url=NULL, parseAsText=NULL, parseAsArrayBuffer=NULL, renderOnUpdate=NULL, resetCameraOnUpdate=NULL) {
    
    props <- list(children=children, id=id, port=port, vtkClass=vtkClass, url=url, parseAsText=parseAsText, parseAsArrayBuffer=parseAsArrayBuffer, renderOnUpdate=renderOnUpdate, resetCameraOnUpdate=resetCameraOnUpdate)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Reader',
        namespace = 'dash_vtk',
        propNames = c('children', 'id', 'port', 'vtkClass', 'url', 'parseAsText', 'parseAsArrayBuffer', 'renderOnUpdate', 'resetCameraOnUpdate'),
        package = 'dashVtk'
        )

    structure(component, class = c('dash_component', 'list'))
}
