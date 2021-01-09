webpackHotUpdatedash_vtk("main",{

/***/ "./src/lib/components/VtkFieldData.react.js":
/*!**************************************************!*\
  !*** ./src/lib/components/VtkFieldData.react.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VtkFieldData; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _VtkView_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VtkView.react */ "./src/lib/components/VtkView.react.js");



/**
 * VtkFieldData is exposing a vtkFieldData to a downstream element
 */

function VtkFieldData(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_VtkView_react__WEBPACK_IMPORTED_MODULE_2__["DataSetContext"].Consumer, null, function (dataset) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_VtkView_react__WEBPACK_IMPORTED_MODULE_2__["FieldsContext"].Provider, {
      value: dataset.getFieldData()
    }, props.children);
  });
}
VtkFieldData.defaultProps = {};
VtkFieldData.propTypes = {
  /**
   * List of representation to show
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node), prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node])
};

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoX3Z0ay8uL3NyYy9saWIvY29tcG9uZW50cy9WdGtGaWVsZERhdGEucmVhY3QuanMiXSwibmFtZXMiOlsiVnRrRmllbGREYXRhIiwicHJvcHMiLCJkYXRhc2V0IiwiZ2V0RmllbGREYXRhIiwiY2hpbGRyZW4iLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvbmVPZlR5cGUiLCJhcnJheU9mIiwibm9kZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBOztBQUNlLFNBQVNBLFlBQVQsQ0FBc0JDLEtBQXRCLEVBQTZCO0FBQzFDLHNCQUNFLDJEQUFDLDZEQUFELENBQWdCLFFBQWhCLFFBRUksVUFBQ0MsT0FBRDtBQUFBLHdCQUNFLDJEQUFDLDREQUFELENBQWUsUUFBZjtBQUF3QixXQUFLLEVBQUVBLE9BQU8sQ0FBQ0MsWUFBUjtBQUEvQixPQUNHRixLQUFLLENBQUNHLFFBRFQsQ0FERjtBQUFBLEdBRkosQ0FERjtBQVVEO0FBRURKLFlBQVksQ0FBQ0ssWUFBYixHQUE0QixFQUE1QjtBQUVBTCxZQUFZLENBQUNNLFNBQWIsR0FBeUI7QUFDdkI7QUFDRjtBQUNBO0FBQ0VGLFVBQVEsRUFBRUcsaURBQVMsQ0FBQ0MsU0FBVixDQUFvQixDQUM1QkQsaURBQVMsQ0FBQ0UsT0FBVixDQUFrQkYsaURBQVMsQ0FBQ0csSUFBNUIsQ0FENEIsRUFFNUJILGlEQUFTLENBQUNHLElBRmtCLENBQXBCO0FBSmEsQ0FBekIsQyIsImZpbGUiOiJmODk5ZmE5LW1haW4td3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgeyBEYXRhU2V0Q29udGV4dCwgRmllbGRzQ29udGV4dCB9IGZyb20gJy4vVnRrVmlldy5yZWFjdCc7XG5cbi8qKlxuICogVnRrRmllbGREYXRhIGlzIGV4cG9zaW5nIGEgdnRrRmllbGREYXRhIHRvIGEgZG93bnN0cmVhbSBlbGVtZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFZ0a0ZpZWxkRGF0YShwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxEYXRhU2V0Q29udGV4dC5Db25zdW1lcj5cbiAgICAgIHtcbiAgICAgICAgKGRhdGFzZXQpID0+XG4gICAgICAgICAgPEZpZWxkc0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2RhdGFzZXQuZ2V0RmllbGREYXRhKCl9PlxuICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgICAgIDwvRmllbGRzQ29udGV4dC5Qcm92aWRlcj5cbiAgICAgIH1cbiAgICA8L0RhdGFTZXRDb250ZXh0LkNvbnN1bWVyPlxuICApO1xufVxuXG5WdGtGaWVsZERhdGEuZGVmYXVsdFByb3BzID0ge307XG5cblZ0a0ZpZWxkRGF0YS5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBMaXN0IG9mIHJlcHJlc2VudGF0aW9uIHRvIHNob3dcbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubm9kZSksXG4gICAgUHJvcFR5cGVzLm5vZGVcbiAgXSksXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==