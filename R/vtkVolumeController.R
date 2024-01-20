# AUTO GENERATED FILE - DO NOT EDIT

#' @export
vtkVolumeController <- function(id=NULL, rescaleColorMap=NULL, size=NULL) {
    
    props <- list(id=id, rescaleColorMap=rescaleColorMap, size=size)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'VolumeController',
        namespace = 'dash_vtk',
        propNames = c('id', 'rescaleColorMap', 'size'),
        package = 'dashVtk'
        )

    structure(component, class = c('dash_component', 'list'))
}
