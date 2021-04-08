
module DashVtk
using Dash

const resources_path = realpath(joinpath( @__DIR__, "..", "deps"))
const version = "0.0.7"

include("vtk_algorithm.jl")
include("vtk_calculator.jl")
include("vtk_celldata.jl")
include("vtk_dataarray.jl")
include("vtk_fielddata.jl")
include("vtk_geometryrepresentation.jl")
include("vtk_glyphrepresentation.jl")
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
    external_url = "https://unpkg.com/dash_vtk@0.0.7/dash_vtk/dash_vtk.min.js",
    dynamic = nothing,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "dash_vtk.min.js.map",
    external_url = "https://unpkg.com/dash_vtk@0.0.7/dash_vtk/dash_vtk.min.js.map",
    dynamic = true,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-Algorithm.js",
    external_url = "https://unpkg.com/dash-vtk@0.0.7/dash_vtk/async-Algorithm.js",
    dynamic = nothing,
    async = :true,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-Calculator.js",
    external_url = "https://unpkg.com/dash-vtk@0.0.7/dash_vtk/async-Calculator.js",
    dynamic = nothing,
    async = :true,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-CellData.js",
    external_url = "https://unpkg.com/dash-vtk@0.0.7/dash_vtk/async-CellData.js",
    dynamic = nothing,
    async = :true,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-DataArray.js",
    external_url = "https://unpkg.com/dash-vtk@0.0.7/dash_vtk/async-DataArray.js",
    dynamic = nothing,
    async = :true,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-FieldData.js",
    external_url = "https://unpkg.com/dash-vtk@0.0.7/dash_vtk/async-FieldData.js",
    dynamic = nothing,
    async = :true,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-GeometryRepresentation.js",
    external_url = "https://unpkg.com/dash-vtk@0.0.7/dash_vtk/async-GeometryRepresentation.js",
    dynamic = nothing,
    async = :true,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-GlyphRepresentation.js",
    external_url = "https://unpkg.com/dash-vtk@0.0.7/dash_vtk/async-GlyphRepresentation.js",
    dynamic = nothing,
    async = :true,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-ImageData.js",
    external_url = "https://unpkg.com/dash-vtk@0.0.7/dash_vtk/async-ImageData.js",
    dynamic = nothing,
    async = :true,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-Mesh.js",
    external_url = "https://unpkg.com/dash-vtk@0.0.7/dash_vtk/async-Mesh.js",
    dynamic = nothing,
    async = :true,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-PointCloudRepresentation.js",
    external_url = "https://unpkg.com/dash-vtk@0.0.7/dash_vtk/async-PointCloudRepresentation.js",
    dynamic = nothing,
    async = :true,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-PointData.js",
    external_url = "https://unpkg.com/dash-vtk@0.0.7/dash_vtk/async-PointData.js",
    dynamic = nothing,
    async = :true,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-PolyData.js",
    external_url = "https://unpkg.com/dash-vtk@0.0.7/dash_vtk/async-PolyData.js",
    dynamic = nothing,
    async = :true,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-Reader.js",
    external_url = "https://unpkg.com/dash-vtk@0.0.7/dash_vtk/async-Reader.js",
    dynamic = nothing,
    async = :true,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-ShareDataSet.js",
    external_url = "https://unpkg.com/dash-vtk@0.0.7/dash_vtk/async-ShareDataSet.js",
    dynamic = nothing,
    async = :true,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-SliceRepresentation.js",
    external_url = "https://unpkg.com/dash-vtk@0.0.7/dash_vtk/async-SliceRepresentation.js",
    dynamic = nothing,
    async = :true,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-View.js",
    external_url = "https://unpkg.com/dash-vtk@0.0.7/dash_vtk/async-View.js",
    dynamic = nothing,
    async = :true,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-Volume.js",
    external_url = "https://unpkg.com/dash-vtk@0.0.7/dash_vtk/async-Volume.js",
    dynamic = nothing,
    async = :true,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-VolumeController.js",
    external_url = "https://unpkg.com/dash-vtk@0.0.7/dash_vtk/async-VolumeController.js",
    dynamic = nothing,
    async = :true,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-VolumeDataRepresentation.js",
    external_url = "https://unpkg.com/dash-vtk@0.0.7/dash_vtk/async-VolumeDataRepresentation.js",
    dynamic = nothing,
    async = :true,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-VolumeRepresentation.js",
    external_url = "https://unpkg.com/dash-vtk@0.0.7/dash_vtk/async-VolumeRepresentation.js",
    dynamic = nothing,
    async = :true,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-Algorithm.js.map",
    external_url = "https://unpkg.com/dash-vtk@0.0.7/dash_vtk/async-Algorithm.js.map",
    dynamic = true,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-Calculator.js.map",
    external_url = "https://unpkg.com/dash-vtk@0.0.7/dash_vtk/async-Calculator.js.map",
    dynamic = true,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-CellData.js.map",
    external_url = "https://unpkg.com/dash-vtk@0.0.7/dash_vtk/async-CellData.js.map",
    dynamic = true,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-DataArray.js.map",
    external_url = "https://unpkg.com/dash-vtk@0.0.7/dash_vtk/async-DataArray.js.map",
    dynamic = true,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-FieldData.js.map",
    external_url = "https://unpkg.com/dash-vtk@0.0.7/dash_vtk/async-FieldData.js.map",
    dynamic = true,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-GeometryRepresentation.js.map",
    external_url = "https://unpkg.com/dash-vtk@0.0.7/dash_vtk/async-GeometryRepresentation.js.map",
    dynamic = true,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-GlyphRepresentation.js.map",
    external_url = "https://unpkg.com/dash-vtk@0.0.7/dash_vtk/async-GlyphRepresentation.js.map",
    dynamic = true,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-ImageData.js.map",
    external_url = "https://unpkg.com/dash-vtk@0.0.7/dash_vtk/async-ImageData.js.map",
    dynamic = true,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-Mesh.js.map",
    external_url = "https://unpkg.com/dash-vtk@0.0.7/dash_vtk/async-Mesh.js.map",
    dynamic = true,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-PointCloudRepresentation.js.map",
    external_url = "https://unpkg.com/dash-vtk@0.0.7/dash_vtk/async-PointCloudRepresentation.js.map",
    dynamic = true,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-PointData.js.map",
    external_url = "https://unpkg.com/dash-vtk@0.0.7/dash_vtk/async-PointData.js.map",
    dynamic = true,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-PolyData.js.map",
    external_url = "https://unpkg.com/dash-vtk@0.0.7/dash_vtk/async-PolyData.js.map",
    dynamic = true,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-Reader.js.map",
    external_url = "https://unpkg.com/dash-vtk@0.0.7/dash_vtk/async-Reader.js.map",
    dynamic = true,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-ShareDataSet.js.map",
    external_url = "https://unpkg.com/dash-vtk@0.0.7/dash_vtk/async-ShareDataSet.js.map",
    dynamic = true,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-SliceRepresentation.js.map",
    external_url = "https://unpkg.com/dash-vtk@0.0.7/dash_vtk/async-SliceRepresentation.js.map",
    dynamic = true,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-View.js.map",
    external_url = "https://unpkg.com/dash-vtk@0.0.7/dash_vtk/async-View.js.map",
    dynamic = true,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-Volume.js.map",
    external_url = "https://unpkg.com/dash-vtk@0.0.7/dash_vtk/async-Volume.js.map",
    dynamic = true,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-VolumeController.js.map",
    external_url = "https://unpkg.com/dash-vtk@0.0.7/dash_vtk/async-VolumeController.js.map",
    dynamic = true,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-VolumeDataRepresentation.js.map",
    external_url = "https://unpkg.com/dash-vtk@0.0.7/dash_vtk/async-VolumeDataRepresentation.js.map",
    dynamic = true,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-VolumeRepresentation.js.map",
    external_url = "https://unpkg.com/dash-vtk@0.0.7/dash_vtk/async-VolumeRepresentation.js.map",
    dynamic = true,
    async = nothing,
    type = :js
)
            ]
        )

    )
end
end
