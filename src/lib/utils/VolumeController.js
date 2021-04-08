import {lazy} from 'react';

export default lazy(() => import(/*webpackChunkName: "VolumeController" */ '../fragments/VolumeController.react'));