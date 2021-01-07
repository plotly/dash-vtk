webpackHotUpdatedash_vtk("main",{

/***/ "./src/lib/components/VtkCellData.react.js":
/*!*************************************************!*\
  !*** ./src/lib/components/VtkCellData.react.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VtkCellData; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);


/**
 * VtkCellData is exposing a vtkCellData to a downstream element
 * It provides the following properties to its children:
 *   - pass along: 'view', 'representation`, `setProps`
 *   - `fields` == `vtkCellData`
 */

function VtkCellData(props) {
  var id = props.id,
      setProps = props.setProps,
      children = props.children,
      view = props.view,
      representation = props.representation,
      dataset = props.dataset;
  var addOnProps = {
    fields: dataset.getCellData(),
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
VtkCellData.defaultProps = {};
VtkCellData.propTypes = {
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
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node), prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node])
};

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoX3Z0ay8uL3NyYy9saWIvY29tcG9uZW50cy9WdGtDZWxsRGF0YS5yZWFjdC5qcyJdLCJuYW1lcyI6WyJWdGtDZWxsRGF0YSIsInByb3BzIiwiaWQiLCJzZXRQcm9wcyIsImNoaWxkcmVuIiwidmlldyIsInJlcHJlc2VudGF0aW9uIiwiZGF0YXNldCIsImFkZE9uUHJvcHMiLCJmaWVsZHMiLCJnZXRDZWxsRGF0YSIsImNoaWxkcmVuV2l0aFZpZXdQcm9wIiwiUmVhY3QiLCJDaGlsZHJlbiIsIm1hcCIsImNoaWxkIiwiY2xvbmVFbGVtZW50IiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiZnVuYyIsIm9uZU9mVHlwZSIsImFycmF5T2YiLCJub2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDZSxTQUFTQSxXQUFULENBQXFCQyxLQUFyQixFQUE0QjtBQUFBLE1BQ2pDQyxFQURpQyxHQUN5QkQsS0FEekIsQ0FDakNDLEVBRGlDO0FBQUEsTUFDN0JDLFFBRDZCLEdBQ3lCRixLQUR6QixDQUM3QkUsUUFENkI7QUFBQSxNQUNuQkMsUUFEbUIsR0FDeUJILEtBRHpCLENBQ25CRyxRQURtQjtBQUFBLE1BQ1RDLElBRFMsR0FDeUJKLEtBRHpCLENBQ1RJLElBRFM7QUFBQSxNQUNIQyxjQURHLEdBQ3lCTCxLQUR6QixDQUNISyxjQURHO0FBQUEsTUFDYUMsT0FEYixHQUN5Qk4sS0FEekIsQ0FDYU0sT0FEYjtBQUV6QyxNQUFNQyxVQUFVLEdBQUc7QUFDakJDLFVBQU0sRUFBRUYsT0FBTyxDQUFDRyxXQUFSLEVBRFM7QUFFakJILFdBQU8sRUFBUEEsT0FGaUI7QUFHakJELGtCQUFjLEVBQWRBLGNBSGlCO0FBSWpCRCxRQUFJLEVBQUpBLElBSmlCO0FBS2pCRixZQUFRLEVBQVJBO0FBTGlCLEdBQW5CO0FBT0EsTUFBTVEsb0JBQW9CLEdBQUdDLDRDQUFLLENBQUNDLFFBQU4sQ0FBZUMsR0FBZixDQUFtQlYsUUFBbkIsRUFBNkIsVUFBQVcsS0FBSztBQUFBLHdCQUFJSCw0Q0FBSyxDQUFDSSxZQUFOLENBQW1CRCxLQUFuQixFQUEwQlAsVUFBMUIsQ0FBSjtBQUFBLEdBQWxDLENBQTdCO0FBQ0Esc0JBQ0U7QUFBSyxNQUFFLEVBQUVOO0FBQVQsS0FDR1Msb0JBREgsQ0FERjtBQUtEO0FBRURYLFdBQVcsQ0FBQ2lCLFlBQVosR0FBMkIsRUFBM0I7QUFHQWpCLFdBQVcsQ0FBQ2tCLFNBQVosR0FBd0I7QUFDdEI7QUFDRjtBQUNBO0FBQ0VoQixJQUFFLEVBQUVpQixpREFBUyxDQUFDQyxNQUpROztBQU10QjtBQUNGO0FBQ0E7QUFDQTtBQUNFakIsVUFBUSxFQUFFZ0IsaURBQVMsQ0FBQ0UsSUFWRTs7QUFZdEI7QUFDRjtBQUNBO0FBQ0VqQixVQUFRLEVBQUVlLGlEQUFTLENBQUNHLFNBQVYsQ0FBb0IsQ0FDNUJILGlEQUFTLENBQUNJLE9BQVYsQ0FBa0JKLGlEQUFTLENBQUNLLElBQTVCLENBRDRCLEVBRTVCTCxpREFBUyxDQUFDSyxJQUZrQixDQUFwQjtBQWZZLENBQXhCLEMiLCJmaWxlIjoiN2M2MmMwOC1tYWluLXdwcy1obXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuLyoqXG4gKiBWdGtDZWxsRGF0YSBpcyBleHBvc2luZyBhIHZ0a0NlbGxEYXRhIHRvIGEgZG93bnN0cmVhbSBlbGVtZW50XG4gKiBJdCBwcm92aWRlcyB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXMgdG8gaXRzIGNoaWxkcmVuOlxuICogICAtIHBhc3MgYWxvbmc6ICd2aWV3JywgJ3JlcHJlc2VudGF0aW9uYCwgYHNldFByb3BzYFxuICogICAtIGBmaWVsZHNgID09IGB2dGtDZWxsRGF0YWBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVnRrQ2VsbERhdGEocHJvcHMpIHtcbiAgY29uc3QgeyBpZCwgc2V0UHJvcHMsIGNoaWxkcmVuLCB2aWV3LCByZXByZXNlbnRhdGlvbiwgZGF0YXNldCB9ID0gcHJvcHM7XG4gIGNvbnN0IGFkZE9uUHJvcHMgPSB7XG4gICAgZmllbGRzOiBkYXRhc2V0LmdldENlbGxEYXRhKCksXG4gICAgZGF0YXNldCxcbiAgICByZXByZXNlbnRhdGlvbixcbiAgICB2aWV3LFxuICAgIHNldFByb3BzLFxuICB9O1xuICBjb25zdCBjaGlsZHJlbldpdGhWaWV3UHJvcCA9IFJlYWN0LkNoaWxkcmVuLm1hcChjaGlsZHJlbiwgY2hpbGQgPT4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBhZGRPblByb3BzKSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBpZD17aWR9PlxuICAgICAge2NoaWxkcmVuV2l0aFZpZXdQcm9wfVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5WdGtDZWxsRGF0YS5kZWZhdWx0UHJvcHMgPSB7fTtcblxuXG5WdGtDZWxsRGF0YS5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBUaGUgSUQgdXNlZCB0byBpZGVudGlmeSB0aGlzIGNvbXBvbmVudCBpbiBEYXNoIGNhbGxiYWNrcy5cbiAgICovXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBEYXNoLWFzc2lnbmVkIGNhbGxiYWNrIHRoYXQgc2hvdWxkIGJlIGNhbGxlZCB0byByZXBvcnQgcHJvcGVydHkgY2hhbmdlc1xuICAgKiB0byBEYXNoLCB0byBtYWtlIHRoZW0gYXZhaWxhYmxlIGZvciBjYWxsYmFja3MuXG4gICAqL1xuICBzZXRQcm9wczogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIExpc3Qgb2YgcmVwcmVzZW50YXRpb24gdG8gc2hvd1xuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5ub2RlKSxcbiAgICBQcm9wVHlwZXMubm9kZVxuICBdKSxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9