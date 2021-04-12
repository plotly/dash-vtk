import {lazy} from 'react';

const AsyncReactVTK = import(/*webpackChunkName: "ReactVTK" */ './ReactVTK');

const AsyncComponentBuilder = name => async () => {
    const ReactVTK = await AsyncReactVTK;
    // console.log("ReactVTK", ReactVTK);
    // window.ReactVTK = ReactVTK;

    const reactComponent = ReactVTK.default[name];
    // We need to trick React.lazy into thinking we are giving
    // the output of an import("my-module.js") Promise.
    const fakeModule = {default: reactComponent};
    return fakeModule;
}

const Algorithm = lazy(AsyncComponentBuilder("Algorithm"));
const Calculator = lazy(AsyncComponentBuilder("Calculator"));
const CellData = lazy(AsyncComponentBuilder("CellData"));
const DataArray = lazy(AsyncComponentBuilder("DataArray"));
const FieldData = lazy(AsyncComponentBuilder("FieldData"));
const GeometryRepresentation = lazy(AsyncComponentBuilder("GeometryRepresentation"));
const GlyphRepresentation = lazy(AsyncComponentBuilder("GlyphRepresentation"));
const ImageData = lazy(AsyncComponentBuilder("ImageData"));
const PointCloudRepresentation = lazy(AsyncComponentBuilder("PointCloudRepresentation"));
const PointData = lazy(AsyncComponentBuilder("PointData"));
const PolyData = lazy(AsyncComponentBuilder("PolyData"));
const Reader = lazy(AsyncComponentBuilder("Reader"));
const SliceRepresentation = lazy(AsyncComponentBuilder("SliceRepresentation"));
const ShareDataSet = lazy(AsyncComponentBuilder("ShareDataSet"));
const View = lazy(AsyncComponentBuilder("View"));
const Volume = lazy(AsyncComponentBuilder("Volume"));
const VolumeController = lazy(AsyncComponentBuilder("VolumeController"));
const VolumeDataRepresentation = lazy(AsyncComponentBuilder("VolumeDataRepresentation"));
const VolumeRepresentation = lazy(AsyncComponentBuilder("VolumeRepresentation"));


export {
    Algorithm,
    Calculator,
    CellData,
    DataArray,
    FieldData,
    GeometryRepresentation,
    GlyphRepresentation,
    ImageData,
    PointCloudRepresentation,
    PointData,
    PolyData,
    Reader,
    SliceRepresentation,
    ShareDataSet,
    View,
    Volume,
    VolumeController,
    VolumeDataRepresentation,
    VolumeRepresentation,
};
