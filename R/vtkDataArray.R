# AUTO GENERATED FILE - DO NOT EDIT

#' @export
vtkDataArray <- function(id=NULL, name=NULL, numberOfComponents=NULL, registration=NULL, type=NULL, values=NULL) {
    
    props <- list(id=id, name=name, numberOfComponents=numberOfComponents, registration=registration, type=type, values=values)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DataArray',
        namespace = 'dash_vtk',
        propNames = c('id', 'name', 'numberOfComponents', 'registration', 'type', 'values'),
        package = 'dashVtk'
        )

    structure(component, class = c('dash_component', 'list'))
}
