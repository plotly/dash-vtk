# AUTO GENERATED FILE - DO NOT EDIT

#' @export
vtkShareDataSet <- function(children=NULL, id=NULL, name=NULL, port=NULL) {
    
    props <- list(children=children, id=id, name=name, port=port)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'ShareDataSet',
        namespace = 'dash_vtk',
        propNames = c('children', 'id', 'name', 'port'),
        package = 'dashVtk'
        )

    structure(component, class = c('dash_component', 'list'))
}
