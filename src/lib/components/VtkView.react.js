import React, {Component} from 'react';
import PropTypes from 'prop-types';

import vtkOpenGLRenderWindow from 'vtk.js/Sources/Rendering/OpenGL/RenderWindow';
import vtkRenderWindow from 'vtk.js/Sources/Rendering/Core/RenderWindow';
import vtkRenderWindowInteractor from 'vtk.js/Sources/Rendering/Core/RenderWindowInteractor';
import vtkRenderer from 'vtk.js/Sources/Rendering/Core/Renderer';
import vtkInteractorStyleTrackballCamera from 'vtk.js/Sources/Interaction/Style/InteractorStyleTrackballCamera';

const CONTAINER_STYLE = { width: '100%', height: '100%', position: 'relative' };
const RENDERER_STYLE = { position: 'absolute', width: '100%', height: '100%', overflow: 'hidden' };
const HIDDEN_STYLE = { display: 'none' };

/**
 * VtkView is responsible to render vtk.js data.
 * It takes the following set of properties:
 *   - `background`:
 */
export default class VtkView extends Component {
    constructor(props) {
        super(props);
        this.containerRef = React.createRef();

        // Create vtk.js view
        this.renderWindow = vtkRenderWindow.newInstance();
        this.renderer = vtkRenderer.newInstance({ background: props.background });
        this.renderWindow.addRenderer(this.renderer);

        this.openglRenderWindow = vtkOpenGLRenderWindow.newInstance();
        this.renderWindow.addView(this.openglRenderWindow);

        this.interactor = vtkRenderWindowInteractor.newInstance();
        this.interactor.setView(this.openglRenderWindow);
        this.interactor.initialize();

        // We may want something different
        this.interactor.setInteractorStyle(vtkInteractorStyleTrackballCamera.newInstance());

        // Resize handling
        this.resizeObserver = new ResizeObserver(() => this.onResize());

        // expose helper methods
        this.resetCamera = this.renderer.resetCamera;
        this.renderView = this.renderWindow.render;
    }

    render() {
        const { id, children } = this.props;
        const addOnProps = { view: this };

        // debug ++++++++++++++++++++++++++++++++++++++++++
        React.Children.forEach(children, (child) => {
            console.log('before child props:', Object.keys(child.props));
        });
        // debug ------------------------------------------

        const childrenWithViewProp = React.Children.map(children, child => React.cloneElement(child, addOnProps));

        // debug ++++++++++++++++++++++++++++++++++++++++++
        React.Children.forEach(childrenWithViewProp, (child) => {
            console.log('after child props:', Object.keys(child.props));
            console.log(' => view:', child.props.view);
        });
        // debug ------------------------------------------

        return (
            <div
                id={id}
                style={CONTAINER_STYLE}
            >
                <div
                    style={RENDERER_STYLE}
                    ref={this.containerRef}
                />
                <div style={HIDDEN_STYLE}>
                    {childrenWithViewProp}
                </div>
            </div>
        );
    }

    onResize() {
        const container = this.containerRef.current;
        if (container) {
            const { width, height } = container.getBoundingClientRect();
            this.openglRenderWindow.setSize(Math.max(width, 10), Math.max(height, 10));
            this.renderWindow.render();
        }
    }

    componentDidMount() {
        const container = this.containerRef.current;
        this.openglRenderWindow.setContainer(container);
        this.interactor.bindEvents(container);
        this.onResize();
        this.resizeObserver.observe(container);
    }

    componentWillUnmount() {
        // Stop size listening
        this.resizeObserver.disconnect();
        this.resizeObserver = null;

        // Detatch from DOM
        this.interactor.unbindEvents();
        this.openglRenderWindow.setContainer(null);

        // Free memory
        this.renderWindow.removeRenderer(this.renderer);
        this.renderWindow.removeView(this.openglRenderWindow);

        this.interactor.delete();
        this.interactor = null;

        this.renderer.delete();
        this.renderer = null;

        this.renderWindow.delete();
        this.renderWindow = null;

        this.openglRenderWindow.delete();
        this.openglRenderWindow = null;
    }
}

VtkView.defaultProps = {
    background: [0.2, 0.3, 0.4],
};

VtkView.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    /**
     * The color of the view background using 3 floating numbers
     * between 0-1 of Red, Green, Blue component.
     */
    background: PropTypes.array,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func,

    /**
     * List of representation to show
     */
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
};
