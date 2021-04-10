import asyncReactVTK from './asyncReactVTK';

const AsyncView = async () => {
    const LazyVTK = await asyncReactVTK;
    console.log("LazyVTK", LazyVTK);
    window.LazyVTK = LazyVTK;
    return {default: LazyVTK.default.View};
}

export {AsyncView};