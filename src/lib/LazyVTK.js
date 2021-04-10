// const AsyncView = () => import('react-vtk-js/dist/esm/core/View');
// const AsyncView = () => import('react-vtk-js').then(ReactVTK => ReactVTK.View);

const AsyncView = async () => {
    const LazyVTK = await import('react-vtk-js');
    return {default: LazyVTK.View};
}

export {AsyncView};
export default () => import('react-vtk-js');