# AUTO GENERATED FILE - DO NOT EDIT

vtkVolumeDataRepresentation <- function(dimensions=NULL, spacing=NULL, origin=NULL, rgb=NULL, rgba=NULL, scalars=NULL, scalarsType=NULL, mapper=NULL, volume=NULL, property=NULL, colorMapPreset=NULL, volumeController=NULL, controllerSize=NULL, rescaleColorMap=NULL, colorDataRange=NULL) {
    
    props <- list(dimensions=dimensions, spacing=spacing, origin=origin, rgb=rgb, rgba=rgba, scalars=scalars, scalarsType=scalarsType, mapper=mapper, volume=volume, property=property, colorMapPreset=colorMapPreset, volumeController=volumeController, controllerSize=controllerSize, rescaleColorMap=rescaleColorMap, colorDataRange=colorDataRange)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'VolumeDataRepresentation',
        namespace = 'dash_vtk',
        propNames = c('dimensions', 'spacing', 'origin', 'rgb', 'rgba', 'scalars', 'scalarsType', 'mapper', 'volume', 'property', 'colorMapPreset', 'volumeController', 'controllerSize', 'rescaleColorMap', 'colorDataRange'),
        package = 'dashVtk'
        )

    structure(component, class = c('dash_component', 'list'))
}
