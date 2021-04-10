import {lazy} from 'react';

const AsyncReactVTK = import(/*webpackChunkName: "ReactVTK" */ './ReactVTK');

const AsyncComponentBuilder = name => async () => {
    const LazyVTK = await AsyncReactVTK;
    // console.log("LazyVTK", LazyVTK);
    // window.LazyVTK = LazyVTK;
    return {default: LazyVTK.default[name]};
}

const Algorithm = lazy(AsyncComponentBuilder("Algorithm"));
const DataArray = lazy(AsyncComponentBuilder("DataArray"));
const GeometryRepresentation = lazy(AsyncComponentBuilder("GeometryRepresentation"));
const PolyData = lazy(AsyncComponentBuilder("PolyData"));
const PointData = lazy(AsyncComponentBuilder("PointData"));
const Reader = lazy(AsyncComponentBuilder("Reader"));
const View = lazy(AsyncComponentBuilder("View"));

export {View, Algorithm, GeometryRepresentation, Reader, PolyData, PointData, DataArray};