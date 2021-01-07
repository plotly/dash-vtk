# AUTO GENERATED FILE - DO NOT EDIT

vtkVtkFieldData <- function(children=NULL, id=NULL, view=NULL, representation=NULL, dataset=NULL) {
    
    props <- list(children=children, id=id, view=view, representation=representation, dataset=dataset)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'VtkFieldData',
        namespace = 'dash_vtk',
        propNames = c('children', 'id', 'view', 'representation', 'dataset'),
        package = 'dashVtk'
        )

    structure(component, class = c('dash_component', 'list'))
}
