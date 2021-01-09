/* eslint no-magic-numbers: 0 */
import React, {Component} from 'react';

import {
    VtkView,
    VtkReader,
    VtkGeometryRepresentation,
    VtkPolyDataSource,
    VtkPointData,
    VtkDataArray,
    VtkAlgorithm,
} from '../lib';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = { startTheta: 30 };
        this.vtkViewRef = React.createRef();
        this.setProps = this.setProps.bind(this);
        this.onResetCamera = this.onResetCamera.bind(this);
        this.onAngle = this.onAngle.bind(this);
    }

    setProps(newProps) {
        this.setState(newProps);
    }

    onAngle(e) {
        this.setState({ startTheta: Number(e.currentTarget.value) });
    }

    onResetCamera() {
        const view = this.vtkViewRef.current;
        view.resetCamera();
        view.renderView();
    }

    render() {
        return (
            <div>
                <button onClick={this.onResetCamera} style={{ position: 'absolute', zIndex: 10 }}>reset camera</button>
                <input type="range" min="0" max="90" onChange={this.onAngle} style={{ position: 'absolute', zIndex: 10, left: '150px' }}/>
                <VtkView ref={this.vtkViewRef} setProps={this.setProps} background={[0.1, 0.1, 0.1]} >
                    <VtkGeometryRepresentation
                        colorBy={['pointData', 'Temperature']}
                    >
                        <VtkPolyDataSource
                            points={[0,0,0,1,0,0,1,1,0,0,1,0]}
                            polys={[4,0,1,2,3]}
                        >
                            <VtkPointData>
                                <VtkDataArray
                                    name="Temperature"
                                    values={[0,3,2,1]}
                                />
                            </VtkPointData>
                        </VtkPolyDataSource>
                    </VtkGeometryRepresentation>
                    <VtkGeometryRepresentation color={[1, 0, 0]}>
                        <VtkAlgorithm vtkClass="vtkConeSource" state={{ resolution: 24, radius: 0.2 }} />
                    </VtkGeometryRepresentation>
                    <VtkGeometryRepresentation colorBy={['cellData', 'layer']}>
                        <VtkAlgorithm
                            vtkClass="vtkConcentricCylinderSource"
                            state={{
                                height: 0.25,
                                radius: [0.2, 0.3, 0.4, 0.6, 0.7, 0.8, 0.9, 1],
                                cellFields: [0, 0.2, 0.4, 0.6, 0.7, 0.8, 0.9, 1],
                                mask: [1, 0, 1, 0, 1, 0, 1, 1],
                                resolution: 60,
                                skipInnerFaces: true,
                                startTheta: this.state.startTheta,
                                endTheta: 370,
                                center: [0,0,0.5],
                            }}
                        />
                    </VtkGeometryRepresentation>
                    <VtkGeometryRepresentation>
                        <VtkReader
                            vtkClass="vtkOBJReader"
                            url="https://kitware.github.io/vtk-js-datasets/data/obj-mtl/star-wars-vader-tie-fighter.obj"
                        />
                    </VtkGeometryRepresentation>
                </VtkView>
            </div>
        );
    }
}

export default App;
