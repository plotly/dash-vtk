# AUTO GENERATED FILE - DO NOT EDIT

#' @export
vtkVolumeDataRepresentation <- function(id=NULL, colorDataRange=NULL, colorMapPreset=NULL, controllerSize=NULL, dimensions=NULL, mapper=NULL, origin=NULL, property=NULL, rescaleColorMap=NULL, rgb=NULL, rgba=NULL, scalars=NULL, scalarsType=NULL, spacing=NULL, volume=NULL, volumeController=NULL) {
    
    props <- list(id=id, colorDataRange=colorDataRange, colorMapPreset=colorMapPreset, controllerSize=controllerSize, dimensions=dimensions, mapper=mapper, origin=origin, property=property, rescaleColorMap=rescaleColorMap, rgb=rgb, rgba=rgba, scalars=scalars, scalarsType=scalarsType, spacing=spacing, volume=volume, volumeController=volumeController)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'VolumeDataRepresentation',
        namespace = 'dash_vtk',
        propNames = c('id', 'colorDataRange', 'colorMapPreset', 'controllerSize', 'dimensions', 'mapper', 'origin', 'property', 'rescaleColorMap', 'rgb', 'rgba', 'scalars', 'scalarsType', 'spacing', 'volume', 'volumeController'),
        package = 'dashVtk'
        )

    structure(component, class = c('dash_component', 'list'))
}
