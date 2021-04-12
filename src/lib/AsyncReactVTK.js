import {lazy} from 'react';

const AsyncReactVTK = import(/*webpackChunkName: "ReactVTK" */ './ReactVTK');

const AsyncComponentBuilder = name => async () => {
    const ReactVTK = await AsyncReactVTK;
    // console.log("ReactVTK", ReactVTK);
    // window.ReactVTK = ReactVTK;
    return {default: ReactVTK.default[name]};
}

const Algorithm = lazy(AsyncComponentBuilder("Algorithm"));
const DataArray = lazy(AsyncComponentBuilder("DataArray"));
const GeometryRepresentation = lazy(AsyncComponentBuilder("GeometryRepresentation"));
const PolyData = lazy(AsyncComponentBuilder("PolyData"));
const PointData = lazy(AsyncComponentBuilder("PointData"));
const Reader = lazy(AsyncComponentBuilder("Reader"));
const View = lazy(AsyncComponentBuilder("View"));

export {View, Algorithm, GeometryRepresentation, Reader, PolyData, PointData, DataArray};