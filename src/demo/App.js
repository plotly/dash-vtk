/* eslint no-magic-numbers: 0 */
import React, {Component} from 'react';

import {
    View,
    Reader,
    GeometryRepresentation,
    PolyData,
    PointData,
    DataArray,
    Algorithm,
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
                <View ref={this.vtkViewRef} background={[0.1, 0.1, 0.1]} >
                    <GeometryRepresentation
                        mapper={{
                            colorByArrayName: 'Temperature',
                            scalarMode: 3,
                            interpolateScalarsBeforeMapping: true,
                        }}
                        colorDataRange={[0, 3]}
                    >
                        <PolyData
                            points={[0,0,0,1,0,0,1,1,0,0,1,0]}
                            polys={[4,0,1,2,3]}
                        >
                            <PointData>
                                <DataArray
                                    name="Temperature"
                                    values={[0,3,2,1]}
                                />
                            </PointData>
                        </PolyData>
                    </GeometryRepresentation>
                    <GeometryRepresentation
                        color={[1, 0, 0]}
                        property={{
                            edgeVisibility: true,
                        }}
                    >
                        <Algorithm
                            vtkClass="vtkConeSource"
                            state={{
                                resolution: Math.round(this.state.startTheta / 2) + 3,
                                radius: 0.2,
                            }}
                        />
                    </GeometryRepresentation>
                    <GeometryRepresentation
                        mapper={{
                            colorByArrayName: 'layer',
                            scalarMode: 4,
                            interpolateScalarsBeforeMapping: false,
                        }}
                        colorMapPreset="jet"
                        colorDataRange={[0.2, 0.9]}
                    >
                        <Algorithm
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
                    </GeometryRepresentation>
                    <GeometryRepresentation>
                        <Reader
                            vtkClass="vtkOBJReader"
                            url="https://kitware.github.io/vtk-js-datasets/data/obj-mtl/star-wars-vader-tie-fighter.obj"
                        />
                    </GeometryRepresentation>
                </View>
            </div>
        );
    }
}

export default App;
