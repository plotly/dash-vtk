# AUTO GENERATED FILE - DO NOT EDIT

vtkVolumeController <- function(id=NULL, size=NULL, rescaleColorMap=NULL) {
    
    props <- list(id=id, size=size, rescaleColorMap=rescaleColorMap)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'VolumeController',
        namespace = 'dash_vtk',
        propNames = c('id', 'size', 'rescaleColorMap'),
        package = 'dashVtk'
        )

    structure(component, class = c('dash_component', 'list'))
}
