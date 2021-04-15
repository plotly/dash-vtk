import { lazy } from 'react';

/**
 * fakeModules: We need to trick React.lazy into thinking we are 
 * giving the output of an import("my-module.js") Promise.
 */
const asyncComponentBuilder = name => async () => {
    // eslint-disable-next-line
    const AsyncReactVTK = import(/* webpackChunkName: "ReactVTK" */ './ReactVTK');
    const ReactVTK = await AsyncReactVTK;

    const reactComponent = ReactVTK.default[name];
    const fakeModule = { default: reactComponent };
    return fakeModule;
}

const Algorithm = lazy(asyncComponentBuilder("Algorithm"));
const Calculator = lazy(asyncComponentBuilder("Calculator"));
const CellData = lazy(asyncComponentBuilder("CellData"));
const DataArray = lazy(asyncComponentBuilder("DataArray"));
const FieldData = lazy(asyncComponentBuilder("FieldData"));
const GeometryRepresentation = lazy(asyncComponentBuilder("GeometryRepresentation"));
const GlyphRepresentation = lazy(asyncComponentBuilder("GlyphRepresentation"));
const ImageData = lazy(asyncComponentBuilder("ImageData"));
const PointCloudRepresentation = lazy(asyncComponentBuilder("PointCloudRepresentation"));
const PointData = lazy(asyncComponentBuilder("PointData"));
const PolyData = lazy(asyncComponentBuilder("PolyData"));
const Reader = lazy(asyncComponentBuilder("Reader"));
const SliceRepresentation = lazy(asyncComponentBuilder("SliceRepresentation"));
const ShareDataSet = lazy(asyncComponentBuilder("ShareDataSet"));
const View = lazy(asyncComponentBuilder("View"));
const Volume = lazy(asyncComponentBuilder("Volume"));
const VolumeController = lazy(asyncComponentBuilder("VolumeController"));
const VolumeDataRepresentation = lazy(asyncComponentBuilder("VolumeDataRepresentation"));
const VolumeRepresentation = lazy(asyncComponentBuilder("VolumeRepresentation"));


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
