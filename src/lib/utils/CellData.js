import {lazy} from 'react';

export default lazy(() => import(/*webpackChunkName: "CellData" */ '../fragments/CellData.react'));