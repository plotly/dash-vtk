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
  console.log('VtkPointData', props);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoX3Z0ay8uL3NyYy9saWIvY29tcG9uZW50cy9WdGtQb2ludERhdGEucmVhY3QuanMiXSwibmFtZXMiOlsiVnRrUG9pbnREYXRhIiwicHJvcHMiLCJjb25zb2xlIiwibG9nIiwiaWQiLCJzZXRQcm9wcyIsImNoaWxkcmVuIiwidmlldyIsInJlcHJlc2VudGF0aW9uIiwiZGF0YXNldCIsImFkZE9uUHJvcHMiLCJmaWVsZHMiLCJnZXRQb2ludERhdGEiLCJjaGlsZHJlbldpdGhWaWV3UHJvcCIsIlJlYWN0IiwiQ2hpbGRyZW4iLCJtYXAiLCJjaGlsZCIsImNsb25lRWxlbWVudCIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImZ1bmMiLCJvbmVPZlR5cGUiLCJhcnJheU9mIiwibm9kZSIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ2UsU0FBU0EsWUFBVCxDQUFzQkMsS0FBdEIsRUFBNkI7QUFDMUNDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLGNBQVosRUFBNEJGLEtBQTVCO0FBRDBDLE1BRWxDRyxFQUZrQyxHQUV3QkgsS0FGeEIsQ0FFbENHLEVBRmtDO0FBQUEsTUFFOUJDLFFBRjhCLEdBRXdCSixLQUZ4QixDQUU5QkksUUFGOEI7QUFBQSxNQUVwQkMsUUFGb0IsR0FFd0JMLEtBRnhCLENBRXBCSyxRQUZvQjtBQUFBLE1BRVZDLElBRlUsR0FFd0JOLEtBRnhCLENBRVZNLElBRlU7QUFBQSxNQUVKQyxjQUZJLEdBRXdCUCxLQUZ4QixDQUVKTyxjQUZJO0FBQUEsTUFFWUMsT0FGWixHQUV3QlIsS0FGeEIsQ0FFWVEsT0FGWjtBQUcxQ1AsU0FBTyxDQUFDQyxHQUFSLENBQVksVUFBWixFQUF3QkksSUFBeEI7QUFDQUwsU0FBTyxDQUFDQyxHQUFSLENBQVksb0JBQVosRUFBa0NLLGNBQWxDO0FBQ0FOLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLGFBQVosRUFBMkJNLE9BQTNCOztBQUNBLE1BQUksQ0FBQ0EsT0FBTCxFQUFjO0FBQ1pQLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGdCQUFaO0FBQ0EsV0FBTyxJQUFQO0FBQ0Q7O0FBQ0QsTUFBTU8sVUFBVSxHQUFHO0FBQ2pCQyxVQUFNLEVBQUVGLE9BQU8sQ0FBQ0csWUFBUixFQURTO0FBRWpCSCxXQUFPLEVBQVBBLE9BRmlCO0FBR2pCRCxrQkFBYyxFQUFkQSxjQUhpQjtBQUlqQkQsUUFBSSxFQUFKQSxJQUppQjtBQUtqQkYsWUFBUSxFQUFSQTtBQUxpQixHQUFuQjtBQU9BLE1BQU1RLG9CQUFvQixHQUFHQyw0Q0FBSyxDQUFDQyxRQUFOLENBQWVDLEdBQWYsQ0FBbUJWLFFBQW5CLEVBQTZCLFVBQUFXLEtBQUs7QUFBQSx3QkFBSUgsNENBQUssQ0FBQ0ksWUFBTixDQUFtQkQsS0FBbkIsRUFBMEJQLFVBQTFCLENBQUo7QUFBQSxHQUFsQyxDQUE3QjtBQUNBLHNCQUNFO0FBQUssTUFBRSxFQUFFTjtBQUFULEtBQ0dTLG9CQURILENBREY7QUFLRDtBQUVEYixZQUFZLENBQUNtQixZQUFiLEdBQTRCLEVBQTVCO0FBRUFuQixZQUFZLENBQUNvQixTQUFiLEdBQXlCO0FBQ3ZCO0FBQ0Y7QUFDQTtBQUNFaEIsSUFBRSxFQUFFaUIsaURBQVMsQ0FBQ0MsTUFKUzs7QUFNdkI7QUFDRjtBQUNBO0FBQ0E7QUFDRWpCLFVBQVEsRUFBRWdCLGlEQUFTLENBQUNFLElBVkc7O0FBWXZCO0FBQ0Y7QUFDQTtBQUNFakIsVUFBUSxFQUFFZSxpREFBUyxDQUFDRyxTQUFWLENBQW9CLENBQzVCSCxpREFBUyxDQUFDSSxPQUFWLENBQWtCSixpREFBUyxDQUFDSyxJQUE1QixDQUQ0QixFQUU1QkwsaURBQVMsQ0FBQ0ssSUFGa0IsQ0FBcEIsQ0FmYTtBQW9CdkI7QUFDQW5CLE1BQUksRUFBRWMsaURBQVMsQ0FBQ00sTUFyQk87QUFzQnZCbkIsZ0JBQWMsRUFBRWEsaURBQVMsQ0FBQ00sTUF0Qkg7QUF1QnZCbEIsU0FBTyxFQUFFWSxpREFBUyxDQUFDTTtBQXZCSSxDQUF6QixDIiwiZmlsZSI6ImJmZmQ2YjQtbWFpbi13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbi8qKlxuICogVnRrUG9pbnREYXRhIGlzIGV4cG9zaW5nIGEgdnRrUG9pbnREYXRhIHRvIGEgZG93bnN0cmVhbSBlbGVtZW50XG4gKiBJdCBwcm92aWRlcyB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXMgdG8gaXRzIGNoaWxkcmVuOlxuICogICAtIHBhc3MgYWxvbmc6ICd2aWV3JywgJ3JlcHJlc2VudGF0aW9uYCwgYHNldFByb3BzYFxuICogICAtIGBmaWVsZHNgID09IGB2dGtQb2ludERhdGFgXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFZ0a1BvaW50RGF0YShwcm9wcykge1xuICBjb25zb2xlLmxvZygnVnRrUG9pbnREYXRhJywgcHJvcHMpO1xuICBjb25zdCB7IGlkLCBzZXRQcm9wcywgY2hpbGRyZW4sIHZpZXcsIHJlcHJlc2VudGF0aW9uLCBkYXRhc2V0IH0gPSBwcm9wcztcbiAgY29uc29sZS5sb2coJyAtIHZpZXc6Jywgdmlldyk7XG4gIGNvbnNvbGUubG9nKCcgLSByZXByZXNlbnRhdGlvbjonLCByZXByZXNlbnRhdGlvbik7XG4gIGNvbnNvbGUubG9nKCcgLSBkYXRhc2V0OicsIGRhdGFzZXQpO1xuICBpZiAoIWRhdGFzZXQpIHtcbiAgICBjb25zb2xlLmxvZygnISEgU2tpcCByZW5kZXInKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBjb25zdCBhZGRPblByb3BzID0ge1xuICAgIGZpZWxkczogZGF0YXNldC5nZXRQb2ludERhdGEoKSxcbiAgICBkYXRhc2V0LFxuICAgIHJlcHJlc2VudGF0aW9uLFxuICAgIHZpZXcsXG4gICAgc2V0UHJvcHMsXG4gIH07XG4gIGNvbnN0IGNoaWxkcmVuV2l0aFZpZXdQcm9wID0gUmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCBjaGlsZCA9PiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIGFkZE9uUHJvcHMpKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGlkPXtpZH0+XG4gICAgICB7Y2hpbGRyZW5XaXRoVmlld1Byb3B9XG4gICAgPC9kaXY+XG4gICk7XG59XG5cblZ0a1BvaW50RGF0YS5kZWZhdWx0UHJvcHMgPSB7fTtcblxuVnRrUG9pbnREYXRhLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIFRoZSBJRCB1c2VkIHRvIGlkZW50aWZ5IHRoaXMgY29tcG9uZW50IGluIERhc2ggY2FsbGJhY2tzLlxuICAgKi9cbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIERhc2gtYXNzaWduZWQgY2FsbGJhY2sgdGhhdCBzaG91bGQgYmUgY2FsbGVkIHRvIHJlcG9ydCBwcm9wZXJ0eSBjaGFuZ2VzXG4gICAqIHRvIERhc2gsIHRvIG1ha2UgdGhlbSBhdmFpbGFibGUgZm9yIGNhbGxiYWNrcy5cbiAgICovXG4gIHNldFByb3BzOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogTGlzdCBvZiByZXByZXNlbnRhdGlvbiB0byBzaG93XG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm5vZGUpLFxuICAgIFByb3BUeXBlcy5ub2RlXG4gIF0pLFxuXG4gIC8vIHBhc3MgYnkgcGFyZW50XG4gIHZpZXc6IFByb3BUeXBlcy5vYmplY3QsXG4gIHJlcHJlc2VudGF0aW9uOiBQcm9wVHlwZXMub2JqZWN0LFxuICBkYXRhc2V0OiBQcm9wVHlwZXMub2JqZWN0LFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=