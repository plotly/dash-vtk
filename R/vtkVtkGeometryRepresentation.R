# AUTO GENERATED FILE - DO NOT EDIT

vtkVtkGeometryRepresentation <- function(children=NULL, id=NULL, colorBy=NULL, pointSize=NULL, color=NULL) {
    
    props <- list(children=children, id=id, colorBy=colorBy, pointSize=pointSize, color=color)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'VtkGeometryRepresentation',
        namespace = 'dash_vtk',
        propNames = c('children', 'id', 'colorBy', 'pointSize', 'color'),
        package = 'dashVtk'
        )

    structure(component, class = c('dash_component', 'list'))
}
