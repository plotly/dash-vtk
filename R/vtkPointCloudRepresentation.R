# AUTO GENERATED FILE - DO NOT EDIT

vtkPointCloudRepresentation <- function(colorDataRange=NULL, colorMapPreset=NULL, property=NULL, rgb=NULL, rgba=NULL, scalars=NULL, xyz=NULL) {
    
    props <- list(colorDataRange=colorDataRange, colorMapPreset=colorMapPreset, property=property, rgb=rgb, rgba=rgba, scalars=scalars, xyz=xyz)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'PointCloudRepresentation',
        namespace = 'dash_vtk',
        propNames = c('colorDataRange', 'colorMapPreset', 'property', 'rgb', 'rgba', 'scalars', 'xyz'),
        package = 'dashVtk'
        )

    structure(component, class = c('dash_component', 'list'))
}
