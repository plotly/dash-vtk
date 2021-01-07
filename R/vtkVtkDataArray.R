# AUTO GENERATED FILE - DO NOT EDIT

vtkVtkDataArray <- function(children=NULL, id=NULL, type=NULL, name=NULL, values=NULL, numberOfComponents=NULL, registration=NULL, view=NULL, representation=NULL, dataset=NULL, fields=NULL) {
    
    props <- list(children=children, id=id, type=type, name=name, values=values, numberOfComponents=numberOfComponents, registration=registration, view=view, representation=representation, dataset=dataset, fields=fields)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'VtkDataArray',
        namespace = 'dash_vtk',
        propNames = c('children', 'id', 'type', 'name', 'values', 'numberOfComponents', 'registration', 'view', 'representation', 'dataset', 'fields'),
        package = 'dashVtk'
        )

    structure(component, class = c('dash_component', 'list'))
}
