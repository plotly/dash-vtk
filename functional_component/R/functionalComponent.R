# AUTO GENERATED FILE - DO NOT EDIT

functionalComponent <- function(id=NULL, value=NULL, n_clicks=NULL) {
    
    props <- list(id=id, value=value, n_clicks=n_clicks)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'FunctionalComponent',
        namespace = 'functional_component',
        propNames = c('id', 'value', 'n_clicks'),
        package = 'functionalComponent'
        )

    structure(component, class = c('dash_component', 'list'))
}
