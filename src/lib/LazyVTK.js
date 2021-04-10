const AsyncView = () => import('react-vtk-js/dist/esm/core/View');
// const AsyncView = () => import('react-vtk-js').then(ReactVTK => ReactVTK.Core.View);

export {AsyncView};
export default () => import('react-vtk-js');