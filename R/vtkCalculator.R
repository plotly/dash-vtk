# AUTO GENERATED FILE - DO NOT EDIT

#' @export
vtkCalculator <- function(children=NULL, id=NULL, arrays=NULL, formula=NULL, location=NULL, name=NULL, port=NULL) {
    
    props <- list(children=children, id=id, arrays=arrays, formula=formula, location=location, name=name, port=port)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Calculator',
        namespace = 'dash_vtk',
        propNames = c('children', 'id', 'arrays', 'formula', 'location', 'name', 'port'),
        package = 'dashVtk'
        )

    structure(component, class = c('dash_component', 'list'))
}
