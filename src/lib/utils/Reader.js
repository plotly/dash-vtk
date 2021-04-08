import {lazy} from 'react';

export default lazy(() => import(/*webpackChunkName: "Reader" */ '../fragments/Reader.react'));