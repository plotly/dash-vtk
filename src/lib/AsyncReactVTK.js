import {lazy} from 'react';

const AsyncReactVTK = import(/*webpackChunkName: "ReactVTK" */ './ReactVTK');

const AsyncComponentBuilder = name => async () => {
    const LazyVTK = await AsyncReactVTK;
    // console.log("LazyVTK", LazyVTK);
    // window.LazyVTK = LazyVTK;
    return {default: LazyVTK.default[name]};
}

const Algorithm = lazy(AsyncComponentBuilder("Algorithm"));
const View = lazy(AsyncComponentBuilder("View"));

export {View, Algorithm};