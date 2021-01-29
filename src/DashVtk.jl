
module DashVtk
using Dash

const resources_path = realpath(joinpath( @__DIR__, "..", "deps"))
const version = "0.0.1"

include("vtk_algorithm.jl")
include("vtk_calculator.jl")
include("vtk_celldata.jl")
include("vtk_dataarray.jl")
include("vtk_fielddata.jl")
include("vtk_geometryrepresentation.jl")
include("vtk_imagedata.jl")
include("vtk_mesh.jl")
include("vtk_pointcloudrepresentation.jl")
include("vtk_pointdata.jl")
include("vtk_polydata.jl")
include("vtk_reader.jl")
include("vtk_sharedataset.jl")
include("vtk_slicerepresentation.jl")
include("vtk_view.jl")
include("vtk_volume.jl")
include("vtk_volumecontroller.jl")
include("vtk_volumedatarepresentation.jl")
include("vtk_volumerepresentation.jl")

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
