# AUTO GENERATED FILE - DO NOT EDIT

#' @export
vtkPolyData <- function(children=NULL, id=NULL, connectivity=NULL, lines=NULL, points=NULL, polys=NULL, port=NULL, strips=NULL, verts=NULL) {
    
    props <- list(children=children, id=id, connectivity=connectivity, lines=lines, points=points, polys=polys, port=port, strips=strips, verts=verts)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'PolyData',
        namespace = 'dash_vtk',
        propNames = c('children', 'id', 'connectivity', 'lines', 'points', 'polys', 'port', 'strips', 'verts'),
        package = 'dashVtk'
        )

    structure(component, class = c('dash_component', 'list'))
}
