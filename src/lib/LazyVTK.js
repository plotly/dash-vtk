import asyncReactVTK from './asyncReactVTK';

const AsyncView = async () => {
    const LazyVTK = await import('react-vtk-js');
    return {default: LazyVTK.View};
}

export {AsyncView};