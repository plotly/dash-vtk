# AUTO GENERATED FILE - DO NOT EDIT

vtkCalculator <- function(children=NULL, id=NULL, port=NULL, name=NULL, location=NULL, arrays=NULL, formula=NULL) {
    
    props <- list(children=children, id=id, port=port, name=name, location=location, arrays=arrays, formula=formula)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Calculator',
        namespace = 'dash_vtk',
        propNames = c('children', 'id', 'port', 'name', 'location', 'arrays', 'formula'),
        package = 'dashVtk'
        )

    structure(component, class = c('dash_component', 'list'))
}
