# AUTO GENERATED FILE - DO NOT EDIT

#' @export
vtkCellData <- function(children=NULL) {
    
    props <- list(children=children)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'CellData',
        namespace = 'dash_vtk',
        propNames = c('children'),
        package = 'dashVtk'
        )

    structure(component, class = c('dash_component', 'list'))
}
