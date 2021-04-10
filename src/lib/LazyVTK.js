import asyncReactVTK from './asyncReactVTK';

const AsyncView = async () => {
    const LazyVTK = await asyncReactVTK;
    return {default: LazyVTK.View};
}

export {AsyncView};