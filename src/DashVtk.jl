
module DashVtk
using Dash

const resources_path = realpath(joinpath( @__DIR__, "..", "deps"))
const version = "0.0.9"

include("jl/vtk_algorithm.jl")
include("jl/vtk_calculator.jl")
include("jl/vtk_celldata.jl")
include("jl/vtk_dataarray.jl")
include("jl/vtk_fielddata.jl")
include("jl/vtk_geometryrepresentation.jl")
include("jl/vtk_glyphrepresentation.jl")
include("jl/vtk_imagedata.jl")
include("jl/vtk_mesh.jl")
include("jl/vtk_pointcloudrepresentation.jl")
include("jl/vtk_pointdata.jl")
include("jl/vtk_polydata.jl")
include("jl/vtk_reader.jl")
include("jl/vtk_sharedataset.jl")
include("jl/vtk_slicerepresentation.jl")
include("jl/vtk_view.jl")
include("jl/vtk_volume.jl")
include("jl/vtk_volumecontroller.jl")
include("jl/vtk_volumedatarepresentation.jl")
include("jl/vtk_volumerepresentation.jl")

function __init__()
    DashBase.register_package(
        DashBase.ResourcePkg(
            "dash_vtk",
            resources_path,
            version = version,
            [
                DashBase.Resource(
    relative_package_path = "dash_vtk.min.js",
    external_url = "https://unpkg.com/dash_vtk@0.0.9/dash_vtk/dash_vtk.min.js",
    dynamic = nothing,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "dash_vtk.min.js.map",
    external_url = "https://unpkg.com/dash_vtk@0.0.9/dash_vtk/dash_vtk.min.js.map",
    dynamic = true,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-ReactVTK.js",
    external_url = "https://unpkg.com/dash_vtk@0.0.9/dash_vtk/async-ReactVTK.js",
    dynamic = nothing,
    async = :true,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-ReactVTK.js.map",
    external_url = "https://unpkg.com/dash_vtk@0.0.9/dash_vtk/async-ReactVTK.js.map",
    dynamic = true,
    async = nothing,
    type = :js
)
            ]
        )

    )
end
end
