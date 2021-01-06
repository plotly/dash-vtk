# AUTO GENERATED FILE - DO NOT EDIT

vtkVtkFieldData <- function(children=NULL, id=NULL) {
    
    props <- list(children=children, id=id)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'VtkFieldData',
        namespace = 'dash_vtk',
        propNames = c('children', 'id'),
        package = 'dashVtk'
        )

    structure(component, class = c('dash_component', 'list'))
}
