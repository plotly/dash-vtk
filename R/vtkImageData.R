# AUTO GENERATED FILE - DO NOT EDIT

vtkImageData <- function(children=NULL, id=NULL, port=NULL, dimensions=NULL, spacing=NULL, origin=NULL) {
    
    props <- list(children=children, id=id, port=port, dimensions=dimensions, spacing=spacing, origin=origin)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'ImageData',
        namespace = 'dash_vtk',
        propNames = c('children', 'id', 'port', 'dimensions', 'spacing', 'origin'),
        package = 'dashVtk'
        )

    structure(component, class = c('dash_component', 'list'))
}
