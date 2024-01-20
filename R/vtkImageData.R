# AUTO GENERATED FILE - DO NOT EDIT

#' @export
vtkImageData <- function(children=NULL, id=NULL, dimensions=NULL, direction=NULL, origin=NULL, port=NULL, spacing=NULL) {
    
    props <- list(children=children, id=id, dimensions=dimensions, direction=direction, origin=origin, port=port, spacing=spacing)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'ImageData',
        namespace = 'dash_vtk',
        propNames = c('children', 'id', 'dimensions', 'direction', 'origin', 'port', 'spacing'),
        package = 'dashVtk'
        )

    structure(component, class = c('dash_component', 'list'))
}
