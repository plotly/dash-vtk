
module DashVtk
using Dash

const resources_path = realpath(joinpath( @__DIR__, "..", "deps"))
const version = "0.0.1"

include("vtk.jl")

function __init__()
    DashBase.register_package(
        DashBase.ResourcePkg(
            "dash_vtk",
            resources_path,
            version = version,
            [
                DashBase.Resource(
    relative_package_path = "dash_vtk.min.js",
    external_url = "https://unpkg.com/dash_vtk@0.0.1/dash_vtk/dash_vtk.min.js",
    dynamic = nothing,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "dash_vtk.min.js.map",
    external_url = "https://unpkg.com/dash_vtk@0.0.1/dash_vtk/dash_vtk.min.js.map",
    dynamic = true,
    async = nothing,
    type = :js
)
            ]
        )

    )
end
end
