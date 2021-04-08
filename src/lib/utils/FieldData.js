import {lazy} from 'react';

export default lazy(() => import(/*webpackChunkName: "FieldData" */ '../fragments/FieldData.react'));