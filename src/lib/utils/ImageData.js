import {lazy} from 'react';

export default lazy(() => import(/*webpackChunkName: "ImageData" */ '../fragments/ImageData.react'));