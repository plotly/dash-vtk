# AUTO GENERATED FILE - DO NOT EDIT

#' @export
vtkAlgorithm <- function(children=NULL, id=NULL, port=NULL, state=NULL, vtkClass=NULL) {
    
    props <- list(children=children, id=id, port=port, state=state, vtkClass=vtkClass)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Algorithm',
        namespace = 'dash_vtk',
        propNames = c('children', 'id', 'port', 'state', 'vtkClass'),
        package = 'dashVtk'
        )

    structure(component, class = c('dash_component', 'list'))
}
