# AUTO GENERATED FILE - DO NOT EDIT

vtkVtkView <- function(children=NULL, id=NULL, background=NULL) {
    
    props <- list(children=children, id=id, background=background)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'VtkView',
        namespace = 'dash_vtk',
        propNames = c('children', 'id', 'background'),
        package = 'dashVtk'
        )

    structure(component, class = c('dash_component', 'list'))
}
