# AUTO GENERATED FILE - DO NOT EDIT

vtkVolumeRepresentation <- function(children=NULL, id=NULL, mapper=NULL, volume=NULL, property=NULL, colorMapPreset=NULL, colorDataRange=NULL) {
    
    props <- list(children=children, id=id, mapper=mapper, volume=volume, property=property, colorMapPreset=colorMapPreset, colorDataRange=colorDataRange)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'VolumeRepresentation',
        namespace = 'dash_vtk',
        propNames = c('children', 'id', 'mapper', 'volume', 'property', 'colorMapPreset', 'colorDataRange'),
        package = 'dashVtk'
        )

    structure(component, class = c('dash_component', 'list'))
}
