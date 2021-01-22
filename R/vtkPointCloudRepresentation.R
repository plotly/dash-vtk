# AUTO GENERATED FILE - DO NOT EDIT

vtkPointCloudRepresentation <- function(xyz=NULL, rgb=NULL, rgba=NULL, scalars=NULL, colorMapPreset=NULL, colorDataRange=NULL, property=NULL) {
    
    props <- list(xyz=xyz, rgb=rgb, rgba=rgba, scalars=scalars, colorMapPreset=colorMapPreset, colorDataRange=colorDataRange, property=property)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'PointCloudRepresentation',
        namespace = 'dash_vtk',
        propNames = c('xyz', 'rgb', 'rgba', 'scalars', 'colorMapPreset', 'colorDataRange', 'property'),
        package = 'dashVtk'
        )

    structure(component, class = c('dash_component', 'list'))
}
