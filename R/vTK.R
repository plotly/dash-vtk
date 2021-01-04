# AUTO GENERATED FILE - DO NOT EDIT

vTK <- function(id=NULL, label=NULL, value=NULL) {
    
    props <- list(id=id, label=label, value=value)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'VTK',
        namespace = 'dash_vtk',
        propNames = c('id', 'label', 'value'),
        package = 'dashVtk'
        )

    structure(component, class = c('dash_component', 'list'))
}
