# AUTO GENERATED FILE - DO NOT EDIT

vtkVtkDataArray <- function(id=NULL, type=NULL, name=NULL, values=NULL, numberOfComponents=NULL, registration=NULL) {
    
    props <- list(id=id, type=type, name=name, values=values, numberOfComponents=numberOfComponents, registration=registration)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'VtkDataArray',
        namespace = 'dash_vtk',
        propNames = c('id', 'type', 'name', 'values', 'numberOfComponents', 'registration'),
        package = 'dashVtk'
        )

    structure(component, class = c('dash_component', 'list'))
}
