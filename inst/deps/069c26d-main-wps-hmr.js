webpackHotUpdatedash_vtk("main",{

/***/ "./src/lib/components/VtkPointData.react.js":
/*!**************************************************!*\
  !*** ./src/lib/components/VtkPointData.react.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VtkPointData; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);


/**
 * VtkPointData is exposing a vtkPointData to a downstream element
 * It provides the following properties to its children:
 *   - pass along: 'view', 'representation`, `setProps`
 *   - `fields` == `vtkPointData`
 */

function VtkPointData(props) {
  console.log('VtkPointData:', Object.keys(props));
  var id = props.id,
      setProps = props.setProps,
      children = props.children,
      view = props.view,
      representation = props.representation,
      dataset = props.dataset;
  console.log(' - view:', view);
  console.log(' - representation:', representation);
  console.log(' - dataset:', dataset);

  if (!dataset) {
    console.log('!! Skip render');
    return null;
  }

  var addOnProps = {
    fields: dataset.getPointData(),
    dataset: dataset,
    representation: representation,
    view: view,
    setProps: setProps
  };
  var childrenWithViewProp = react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.map(children, function (child) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(child, addOnProps);
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: id
  }, childrenWithViewProp);
}
VtkPointData.defaultProps = {};
VtkPointData.propTypes = {
  /**
   * The ID used to identify this component in Dash callbacks.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Dash-assigned callback that should be called to report property changes
   * to Dash, to make them available for callbacks.
   */
  setProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,

  /**
   * List of representation to show
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node), prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node]),
  // pass by parent
  view: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  representation: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  dataset: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoX3Z0ay8uL3NyYy9saWIvY29tcG9uZW50cy9WdGtQb2ludERhdGEucmVhY3QuanMiXSwibmFtZXMiOlsiVnRrUG9pbnREYXRhIiwicHJvcHMiLCJjb25zb2xlIiwibG9nIiwiT2JqZWN0Iiwia2V5cyIsImlkIiwic2V0UHJvcHMiLCJjaGlsZHJlbiIsInZpZXciLCJyZXByZXNlbnRhdGlvbiIsImRhdGFzZXQiLCJhZGRPblByb3BzIiwiZmllbGRzIiwiZ2V0UG9pbnREYXRhIiwiY2hpbGRyZW5XaXRoVmlld1Byb3AiLCJSZWFjdCIsIkNoaWxkcmVuIiwibWFwIiwiY2hpbGQiLCJjbG9uZUVsZW1lbnQiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJmdW5jIiwib25lT2ZUeXBlIiwiYXJyYXlPZiIsIm5vZGUiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNlLFNBQVNBLFlBQVQsQ0FBc0JDLEtBQXRCLEVBQTZCO0FBQzFDQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxlQUFaLEVBQTZCQyxNQUFNLENBQUNDLElBQVAsQ0FBWUosS0FBWixDQUE3QjtBQUQwQyxNQUVsQ0ssRUFGa0MsR0FFd0JMLEtBRnhCLENBRWxDSyxFQUZrQztBQUFBLE1BRTlCQyxRQUY4QixHQUV3Qk4sS0FGeEIsQ0FFOUJNLFFBRjhCO0FBQUEsTUFFcEJDLFFBRm9CLEdBRXdCUCxLQUZ4QixDQUVwQk8sUUFGb0I7QUFBQSxNQUVWQyxJQUZVLEdBRXdCUixLQUZ4QixDQUVWUSxJQUZVO0FBQUEsTUFFSkMsY0FGSSxHQUV3QlQsS0FGeEIsQ0FFSlMsY0FGSTtBQUFBLE1BRVlDLE9BRlosR0FFd0JWLEtBRnhCLENBRVlVLE9BRlo7QUFHMUNULFNBQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVosRUFBd0JNLElBQXhCO0FBQ0FQLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLG9CQUFaLEVBQWtDTyxjQUFsQztBQUNBUixTQUFPLENBQUNDLEdBQVIsQ0FBWSxhQUFaLEVBQTJCUSxPQUEzQjs7QUFDQSxNQUFJLENBQUNBLE9BQUwsRUFBYztBQUNaVCxXQUFPLENBQUNDLEdBQVIsQ0FBWSxnQkFBWjtBQUNBLFdBQU8sSUFBUDtBQUNEOztBQUNELE1BQU1TLFVBQVUsR0FBRztBQUNqQkMsVUFBTSxFQUFFRixPQUFPLENBQUNHLFlBQVIsRUFEUztBQUVqQkgsV0FBTyxFQUFQQSxPQUZpQjtBQUdqQkQsa0JBQWMsRUFBZEEsY0FIaUI7QUFJakJELFFBQUksRUFBSkEsSUFKaUI7QUFLakJGLFlBQVEsRUFBUkE7QUFMaUIsR0FBbkI7QUFPQSxNQUFNUSxvQkFBb0IsR0FBR0MsNENBQUssQ0FBQ0MsUUFBTixDQUFlQyxHQUFmLENBQW1CVixRQUFuQixFQUE2QixVQUFBVyxLQUFLO0FBQUEsd0JBQUlILDRDQUFLLENBQUNJLFlBQU4sQ0FBbUJELEtBQW5CLEVBQTBCUCxVQUExQixDQUFKO0FBQUEsR0FBbEMsQ0FBN0I7QUFDQSxzQkFDRTtBQUFLLE1BQUUsRUFBRU47QUFBVCxLQUNHUyxvQkFESCxDQURGO0FBS0Q7QUFFRGYsWUFBWSxDQUFDcUIsWUFBYixHQUE0QixFQUE1QjtBQUVBckIsWUFBWSxDQUFDc0IsU0FBYixHQUF5QjtBQUN2QjtBQUNGO0FBQ0E7QUFDRWhCLElBQUUsRUFBRWlCLGlEQUFTLENBQUNDLE1BSlM7O0FBTXZCO0FBQ0Y7QUFDQTtBQUNBO0FBQ0VqQixVQUFRLEVBQUVnQixpREFBUyxDQUFDRSxJQVZHOztBQVl2QjtBQUNGO0FBQ0E7QUFDRWpCLFVBQVEsRUFBRWUsaURBQVMsQ0FBQ0csU0FBVixDQUFvQixDQUM1QkgsaURBQVMsQ0FBQ0ksT0FBVixDQUFrQkosaURBQVMsQ0FBQ0ssSUFBNUIsQ0FENEIsRUFFNUJMLGlEQUFTLENBQUNLLElBRmtCLENBQXBCLENBZmE7QUFvQnZCO0FBQ0FuQixNQUFJLEVBQUVjLGlEQUFTLENBQUNNLE1BckJPO0FBc0J2Qm5CLGdCQUFjLEVBQUVhLGlEQUFTLENBQUNNLE1BdEJIO0FBdUJ2QmxCLFNBQU8sRUFBRVksaURBQVMsQ0FBQ007QUF2QkksQ0FBekIsQyIsImZpbGUiOiIwNjljMjZkLW1haW4td3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG4vKipcbiAqIFZ0a1BvaW50RGF0YSBpcyBleHBvc2luZyBhIHZ0a1BvaW50RGF0YSB0byBhIGRvd25zdHJlYW0gZWxlbWVudFxuICogSXQgcHJvdmlkZXMgdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzIHRvIGl0cyBjaGlsZHJlbjpcbiAqICAgLSBwYXNzIGFsb25nOiAndmlldycsICdyZXByZXNlbnRhdGlvbmAsIGBzZXRQcm9wc2BcbiAqICAgLSBgZmllbGRzYCA9PSBgdnRrUG9pbnREYXRhYFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBWdGtQb2ludERhdGEocHJvcHMpIHtcbiAgY29uc29sZS5sb2coJ1Z0a1BvaW50RGF0YTonLCBPYmplY3Qua2V5cyhwcm9wcykpO1xuICBjb25zdCB7IGlkLCBzZXRQcm9wcywgY2hpbGRyZW4sIHZpZXcsIHJlcHJlc2VudGF0aW9uLCBkYXRhc2V0IH0gPSBwcm9wcztcbiAgY29uc29sZS5sb2coJyAtIHZpZXc6Jywgdmlldyk7XG4gIGNvbnNvbGUubG9nKCcgLSByZXByZXNlbnRhdGlvbjonLCByZXByZXNlbnRhdGlvbik7XG4gIGNvbnNvbGUubG9nKCcgLSBkYXRhc2V0OicsIGRhdGFzZXQpO1xuICBpZiAoIWRhdGFzZXQpIHtcbiAgICBjb25zb2xlLmxvZygnISEgU2tpcCByZW5kZXInKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBjb25zdCBhZGRPblByb3BzID0ge1xuICAgIGZpZWxkczogZGF0YXNldC5nZXRQb2ludERhdGEoKSxcbiAgICBkYXRhc2V0LFxuICAgIHJlcHJlc2VudGF0aW9uLFxuICAgIHZpZXcsXG4gICAgc2V0UHJvcHMsXG4gIH07XG4gIGNvbnN0IGNoaWxkcmVuV2l0aFZpZXdQcm9wID0gUmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCBjaGlsZCA9PiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIGFkZE9uUHJvcHMpKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGlkPXtpZH0+XG4gICAgICB7Y2hpbGRyZW5XaXRoVmlld1Byb3B9XG4gICAgPC9kaXY+XG4gICk7XG59XG5cblZ0a1BvaW50RGF0YS5kZWZhdWx0UHJvcHMgPSB7fTtcblxuVnRrUG9pbnREYXRhLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIFRoZSBJRCB1c2VkIHRvIGlkZW50aWZ5IHRoaXMgY29tcG9uZW50IGluIERhc2ggY2FsbGJhY2tzLlxuICAgKi9cbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIERhc2gtYXNzaWduZWQgY2FsbGJhY2sgdGhhdCBzaG91bGQgYmUgY2FsbGVkIHRvIHJlcG9ydCBwcm9wZXJ0eSBjaGFuZ2VzXG4gICAqIHRvIERhc2gsIHRvIG1ha2UgdGhlbSBhdmFpbGFibGUgZm9yIGNhbGxiYWNrcy5cbiAgICovXG4gIHNldFByb3BzOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogTGlzdCBvZiByZXByZXNlbnRhdGlvbiB0byBzaG93XG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm5vZGUpLFxuICAgIFByb3BUeXBlcy5ub2RlXG4gIF0pLFxuXG4gIC8vIHBhc3MgYnkgcGFyZW50XG4gIHZpZXc6IFByb3BUeXBlcy5vYmplY3QsXG4gIHJlcHJlc2VudGF0aW9uOiBQcm9wVHlwZXMub2JqZWN0LFxuICBkYXRhc2V0OiBQcm9wVHlwZXMub2JqZWN0LFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=