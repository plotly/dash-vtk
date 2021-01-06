/* eslint no-magic-numbers: 0 */
import React, {Component} from 'react';

import { VtkView, VtkGeometryRepresentation, VtkPolyDataSource, VtkPointData, VtkDataArray } from '../lib';

class App extends Component {

    constructor(props) {
        super(props);
        this.vtkViewRef = React.createRef();
        this.setProps = this.setProps.bind(this);
        this.onResetCamera = this.onResetCamera.bind(this);
    }

    setProps(newProps) {
        this.setState(newProps);
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
                </VtkView>
            </div>
        )
    }
}

export default App;
