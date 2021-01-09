/* eslint-disable import/prefer-default-export */
import VtkAlgorithm from './components/VtkAlgorithm.react';
import VtkCellData from './components/VtkCellData.react';
import VtkDataArray from './components/VtkDataArray.react';
import VtkFieldData from './components/VtkFieldData.react';
import VtkGeometryRepresentation from './components/VtkGeometryRepresentation.react';
import VtkPointData from './components/VtkPointData.react';
import VtkPolyDataSource from './components/VtkPolyDataSource.react';
import VtkReader from './components/VtkReader.react';
import VtkView from './components/VtkView.react';

// Required to get the algo we want...
import './vtkAvailableClasses';

export {
    VtkAlgorithm,
    VtkCellData,
    VtkDataArray,
    VtkFieldData,
    VtkGeometryRepresentation,
    VtkPointData,
    VtkPolyDataSource,
    VtkReader,
    VtkView,
};
