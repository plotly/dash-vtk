# AUTO GENERATED FILE - DO NOT EDIT

#' @export
vtkFieldData <- function(children=NULL) {
    
    props <- list(children=children)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'FieldData',
        namespace = 'dash_vtk',
        propNames = c('children'),
        package = 'dashVtk'
        )

    structure(component, class = c('dash_component', 'list'))
}
