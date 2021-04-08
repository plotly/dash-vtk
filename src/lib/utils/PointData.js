import {lazy} from 'react';

export default lazy(() => import(/*webpackChunkName: "PointData" */ '../fragments/PointData.react'));