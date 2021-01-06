# AUTO GENERATED FILE - DO NOT EDIT

vtkVtkGeometryRepresentation <- function(children=NULL, id=NULL, colorBy=NULL, pointSize=NULL, color=NULL, view=NULL) {
    
    props <- list(children=children, id=id, colorBy=colorBy, pointSize=pointSize, color=color, view=view)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'VtkGeometryRepresentation',
        namespace = 'dash_vtk',
        propNames = c('children', 'id', 'colorBy', 'pointSize', 'color', 'view'),
        package = 'dashVtk'
        )

    structure(component, class = c('dash_component', 'list'))
}
