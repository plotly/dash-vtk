# AUTO GENERATED FILE - DO NOT EDIT

vtkVtkPolyDataSource <- function(children=NULL, id=NULL, port=NULL, points=NULL, verts=NULL, lines=NULL, polys=NULL, strips=NULL, pointCloud=NULL) {
    
    props <- list(children=children, id=id, port=port, points=points, verts=verts, lines=lines, polys=polys, strips=strips, pointCloud=pointCloud)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'VtkPolyDataSource',
        namespace = 'dash_vtk',
        propNames = c('children', 'id', 'port', 'points', 'verts', 'lines', 'polys', 'strips', 'pointCloud'),
        package = 'dashVtk'
        )

    structure(component, class = c('dash_component', 'list'))
}
