# AUTO GENERATED FILE - DO NOT EDIT

vtkPolyData <- function(children=NULL, id=NULL, port=NULL, points=NULL, verts=NULL, lines=NULL, polys=NULL, strips=NULL, connectivity=NULL) {
    
    props <- list(children=children, id=id, port=port, points=points, verts=verts, lines=lines, polys=polys, strips=strips, connectivity=connectivity)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'PolyData',
        namespace = 'dash_vtk',
        propNames = c('children', 'id', 'port', 'points', 'verts', 'lines', 'polys', 'strips', 'connectivity'),
        package = 'dashVtk'
        )

    structure(component, class = c('dash_component', 'list'))
}
