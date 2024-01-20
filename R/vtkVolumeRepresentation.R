# AUTO GENERATED FILE - DO NOT EDIT

#' @export
vtkVolumeRepresentation <- function(children=NULL, id=NULL, colorDataRange=NULL, colorMapPreset=NULL, mapper=NULL, property=NULL, volume=NULL) {
    
    props <- list(children=children, id=id, colorDataRange=colorDataRange, colorMapPreset=colorMapPreset, mapper=mapper, property=property, volume=volume)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'VolumeRepresentation',
        namespace = 'dash_vtk',
        propNames = c('children', 'id', 'colorDataRange', 'colorMapPreset', 'mapper', 'property', 'volume'),
        package = 'dashVtk'
        )

    structure(component, class = c('dash_component', 'list'))
}
