# AUTO GENERATED FILE - DO NOT EDIT

#' @export
vtkMesh <- function(id=NULL, port=NULL, state=NULL) {
    
    props <- list(id=id, port=port, state=state)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Mesh',
        namespace = 'dash_vtk',
        propNames = c('id', 'port', 'state'),
        package = 'dashVtk'
        )

    structure(component, class = c('dash_component', 'list'))
}
