# AUTO GENERATED FILE - DO NOT EDIT

vtkSliceRepresentation <- function(children=NULL, id=NULL, mapper=NULL, actor=NULL, property=NULL, colorMapPreset=NULL, colorDataRange=NULL, iSlice=NULL, jSlice=NULL, kSlice=NULL, xSlice=NULL, ySlice=NULL, zSlice=NULL) {
    
    props <- list(children=children, id=id, mapper=mapper, actor=actor, property=property, colorMapPreset=colorMapPreset, colorDataRange=colorDataRange, iSlice=iSlice, jSlice=jSlice, kSlice=kSlice, xSlice=xSlice, ySlice=ySlice, zSlice=zSlice)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'SliceRepresentation',
        namespace = 'dash_vtk',
        propNames = c('children', 'id', 'mapper', 'actor', 'property', 'colorMapPreset', 'colorDataRange', 'iSlice', 'jSlice', 'kSlice', 'xSlice', 'ySlice', 'zSlice'),
        package = 'dashVtk'
        )

    structure(component, class = c('dash_component', 'list'))
}
