
module FunctionalComponent
using Dash

const resources_path = realpath(joinpath( @__DIR__, "..", "deps"))
const version = "0.0.1"

include("functionalcomponent.jl")

function __init__()
    DashBase.register_package(
        DashBase.ResourcePkg(
            "functional_component",
            resources_path,
            version = version,
            [
                DashBase.Resource(
    relative_package_path = "functional_component.min.js",
    external_url = "https://unpkg.com/functional_component@0.0.1/functional_component/functional_component.min.js",
    dynamic = nothing,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "functional_component.min.js.map",
    external_url = "https://unpkg.com/functional_component@0.0.1/functional_component/functional_component.min.js.map",
    dynamic = true,
    async = nothing,
    type = :js
)
            ]
        )

    )
end
end
