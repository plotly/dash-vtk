# AUTO GENERATED FILE - DO NOT EDIT

vtkShareDataSet <- function(children=NULL, id=NULL, port=NULL, name=NULL) {
    
    props <- list(children=children, id=id, port=port, name=name)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'ShareDataSet',
        namespace = 'dash_vtk',
        propNames = c('children', 'id', 'port', 'name'),
        package = 'dashVtk'
        )

    structure(component, class = c('dash_component', 'list'))
}
