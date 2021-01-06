import React, { useState, useEffect } from 'react';

/**
 * Some arbitrary description
 */
function FunctionalComponent(props) {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
    props.setProps({n_clicks: count});
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

FunctionalComponent.defaultProps = {
    n_clicks: 0
};

FunctionalComponent.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,


    /**
     * The value displayed in the input.
     */
    value: PropTypes.string,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func,

    /**
     * Number of time button was clicked
     */
    n_clicks: PropTypes.number,

};

export default FunctionalComponent;