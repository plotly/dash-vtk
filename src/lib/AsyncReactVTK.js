const AsyncReactVTK = import(/*webpackChunkName: "ReactVTK" */ './ReactVTK');

const AsyncView = async () => {
    const LazyVTK = await AsyncReactVTK;
    console.log("LazyVTK", LazyVTK);
    window.LazyVTK = LazyVTK;
    return {default: LazyVTK.default.View};
}

export {AsyncView};