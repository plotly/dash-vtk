# AUTO GENERATED FILE - DO NOT EDIT

#' @export
vtkSliceRepresentation <- function(children=NULL, id=NULL, actor=NULL, colorDataRange=NULL, colorMapPreset=NULL, iSlice=NULL, jSlice=NULL, kSlice=NULL, mapper=NULL, property=NULL, xSlice=NULL, ySlice=NULL, zSlice=NULL) {
    
    props <- list(children=children, id=id, actor=actor, colorDataRange=colorDataRange, colorMapPreset=colorMapPreset, iSlice=iSlice, jSlice=jSlice, kSlice=kSlice, mapper=mapper, property=property, xSlice=xSlice, ySlice=ySlice, zSlice=zSlice)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'SliceRepresentation',
        namespace = 'dash_vtk',
        propNames = c('children', 'id', 'actor', 'colorDataRange', 'colorMapPreset', 'iSlice', 'jSlice', 'kSlice', 'mapper', 'property', 'xSlice', 'ySlice', 'zSlice'),
        package = 'dashVtk'
        )

    structure(component, class = c('dash_component', 'list'))
}
