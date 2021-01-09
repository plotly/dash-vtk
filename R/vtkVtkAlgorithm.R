# AUTO GENERATED FILE - DO NOT EDIT

vtkVtkAlgorithm <- function(children=NULL, id=NULL, port=NULL, vtkClass=NULL, state=NULL) {
    
    props <- list(children=children, id=id, port=port, vtkClass=vtkClass, state=state)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'VtkAlgorithm',
        namespace = 'dash_vtk',
        propNames = c('children', 'id', 'port', 'vtkClass', 'state'),
        package = 'dashVtk'
        )

    structure(component, class = c('dash_component', 'list'))
}
