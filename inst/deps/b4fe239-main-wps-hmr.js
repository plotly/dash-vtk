webpackHotUpdatedash_vtk("main",{

/***/ "./src/lib/components/VtkDataArray.react.js":
/*!**************************************************!*\
  !*** ./src/lib/components/VtkDataArray.react.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VtkDataArray; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vtk_js_Sources_Common_Core_DataArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vtk.js/Sources/Common/Core/DataArray */ "./node_modules/vtk.js/Sources/Common/Core/DataArray/index.js");
/* harmony import */ var vtk_js_Sources_macro__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vtk.js/Sources/macro */ "./node_modules/vtk.js/Sources/macro.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





/**
 * VtkDataArray is creating a vtkDataArray for the container fields
 * It takes the following set of properties:
 *   - type: 'Float32Array', 'Float64Array', 'Uint16Array', ...
 *   - values: [number, number, ...]
 *   - numberOfComponents: 1,
 *   - registration: 'addArray', 'setScalars', ...
 */

var VtkDataArray = /*#__PURE__*/function (_Component) {
  _inherits(VtkDataArray, _Component);

  var _super = _createSuper(VtkDataArray);

  function VtkDataArray(props) {
    var _this;

    _classCallCheck(this, VtkDataArray);

    _this = _super.call(this, props); // Create vtk.js data array

    _this.array = vtk_js_Sources_Common_Core_DataArray__WEBPACK_IMPORTED_MODULE_2__["default"].newInstance({
      empty: true
    });
    return _this;
  }

  _createClass(VtkDataArray, [{
    key: "render",
    value: function render() {
      console.log('VtkDataArray', this.props);
      return null;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          fields = _this$props.fields,
          registration = _this$props.registration;
      this.update(this.props);
      fields[registration](this.array);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      this.update(this.props, prevProps);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var fields = this.props.fields;
      fields.removeArray(this.array);
      this.array["delete"]();
      this.array = null;
    }
  }, {
    key: "update",
    value: function update(props, previous) {
      var name = props.name,
          type = props.type,
          values = props.values,
          numberOfComponents = props.numberOfComponents;
      var klass = vtk_js_Sources_macro__WEBPACK_IMPORTED_MODULE_3__["TYPED_ARRAYS"][type];
      this.array.setName(name);
      var changeDetected = false;

      if (type && (!previous || type !== previous.type)) {
        changeDetected = true;
      }

      if (numberOfComponents && (!previous || numberOfComponents !== previous.numberOfComponents)) {
        changeDetected = true;
      }

      if (values && (changeDetected || !previous || values !== previous.values)) {
        this.array.setData(klass.from(values), numberOfComponents);
      }
    }
  }]);

  return VtkDataArray;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);


VtkDataArray.defaultProps = {
  name: 'scalars',
  type: 'Float32Array',
  values: [],
  numberOfComponents: 1,
  registration: 'addArray'
};
VtkDataArray.propTypes = {
  /**
   * The ID used to identify this component in Dash callbacks.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Dash-assigned callback that should be called to report property changes
   * to Dash, to make them available for callbacks.
   */
  setProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  // -- vtk.js exposed properties

  /**
   * Typed array name
   */
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Field name
   */
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Actual values to use inside our array
   */
  values: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number),

  /**
   * Number of components / Tuple size
   */
  numberOfComponents: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * Name of the method to call on the fieldData (addArray, setScalars, setVectors...)
   */
  registration: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * List of representation to show
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node), prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node]),

  /**
   * Passed by parent
   */
  fields: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoX3Z0ay8uL3NyYy9saWIvY29tcG9uZW50cy9WdGtEYXRhQXJyYXkucmVhY3QuanMiXSwibmFtZXMiOlsiVnRrRGF0YUFycmF5IiwicHJvcHMiLCJhcnJheSIsInZ0a0RhdGFBcnJheSIsIm5ld0luc3RhbmNlIiwiZW1wdHkiLCJjb25zb2xlIiwibG9nIiwiZmllbGRzIiwicmVnaXN0cmF0aW9uIiwidXBkYXRlIiwicHJldlByb3BzIiwicHJldlN0YXRlIiwic25hcHNob3QiLCJyZW1vdmVBcnJheSIsInByZXZpb3VzIiwibmFtZSIsInR5cGUiLCJ2YWx1ZXMiLCJudW1iZXJPZkNvbXBvbmVudHMiLCJrbGFzcyIsIlRZUEVEX0FSUkFZUyIsInNldE5hbWUiLCJjaGFuZ2VEZXRlY3RlZCIsInNldERhdGEiLCJmcm9tIiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiaWQiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJzZXRQcm9wcyIsImZ1bmMiLCJhcnJheU9mIiwibnVtYmVyIiwiY2hpbGRyZW4iLCJvbmVPZlR5cGUiLCJub2RlIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUNxQkEsWTs7Ozs7QUFDbkIsd0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsOEJBQU1BLEtBQU4sRUFEaUIsQ0FHakI7O0FBQ0EsVUFBS0MsS0FBTCxHQUFhQyw0RUFBWSxDQUFDQyxXQUFiLENBQXlCO0FBQUVDLFdBQUssRUFBRTtBQUFULEtBQXpCLENBQWI7QUFKaUI7QUFLbEI7Ozs7NkJBRVE7QUFDUEMsYUFBTyxDQUFDQyxHQUFSLENBQVksY0FBWixFQUE0QixLQUFLTixLQUFqQztBQUNBLGFBQU8sSUFBUDtBQUNEOzs7d0NBRW1CO0FB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QUFDUSxJQUE1QixDQUQ0QixFQUU1QlIsaURBQVMsQ0FBQ1EsSUFGa0IsQ0FBcEIsQ0ExQ2E7O0FBOEN2QjtBQUNGO0FBQ0E7QUFDRTlCLFFBQU0sRUFBRXNCLGlEQUFTLENBQUNTO0FBakRLLENBQXpCLEMiLCJmaWxlIjoiYjRmZTIzOS1tYWluLXdwcy1obXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHZ0a0RhdGFBcnJheSBmcm9tICd2dGsuanMvU291cmNlcy9Db21tb24vQ29yZS9EYXRhQXJyYXknO1xuaW1wb3J0IHsgVFlQRURfQVJSQVlTIH0gZnJvbSAndnRrLmpzL1NvdXJjZXMvbWFjcm8nO1xuXG4vKipcbiAqIFZ0a0RhdGFBcnJheSBpcyBjcmVhdGluZyBhIHZ0a0RhdGFBcnJheSBmb3IgdGhlIGNvbnRhaW5lciBmaWVsZHNcbiAqIEl0IHRha2VzIHRoZSBmb2xsb3dpbmcgc2V0IG9mIHByb3BlcnRpZXM6XG4gKiAgIC0gdHlwZTogJ0Zsb2F0MzJBcnJheScsICdGbG9hdDY0QXJyYXknLCAnVWludDE2QXJyYXknLCAuLi5cbiAqICAgLSB2YWx1ZXM6IFtudW1iZXIsIG51bWJlciwgLi4uXVxuICogICAtIG51bWJlck9mQ29tcG9uZW50czogMSxcbiAqICAgLSByZWdpc3RyYXRpb246ICdhZGRBcnJheScsICdzZXRTY2FsYXJzJywgLi4uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZ0a0RhdGFBcnJheSBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgLy8gQ3JlYXRlIHZ0ay5qcyBkYXRhIGFycmF5XG4gICAgdGhpcy5hcnJheSA9IHZ0a0RhdGFBcnJheS5uZXdJbnN0YW5jZSh7IGVtcHR5OiB0cnVlIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnNvbGUubG9nKCdWdGtEYXRhQXJyYXknLCB0aGlzLnByb3BzKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgZmllbGRzLCByZWdpc3RyYXRpb24gfSA9IHRoaXMucHJvcHM7XG4gICAgdGhpcy51cGRhdGUodGhpcy5wcm9wcyk7XG4gICAgZmllbGRzW3JlZ2lzdHJhdGlvbl0odGhpcy5hcnJheSk7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUsIHNuYXBzaG90KSB7XG4gICAgdGhpcy51cGRhdGUodGhpcy5wcm9wcywgcHJldlByb3BzKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGNvbnN0IHsgZmllbGRzIH0gPSB0aGlzLnByb3BzO1xuICAgIGZpZWxkcy5yZW1vdmVBcnJheSh0aGlzLmFycmF5KTtcbiAgICB0aGlzLmFycmF5LmRlbGV0ZSgpO1xuICAgIHRoaXMuYXJyYXkgPSBudWxsO1xuICB9XG5cbiAgdXBkYXRlKHByb3BzLCBwcmV2aW91cykge1xuICAgIGNvbnN0IHsgbmFtZSwgdHlwZSwgdmFsdWVzLCBudW1iZXJPZkNvbXBvbmVudHMgfSA9IHByb3BzO1xuICAgIGNvbnN0IGtsYXNzID0gVFlQRURfQVJSQVlTW3R5cGVdO1xuXG4gICAgdGhpcy5hcnJheS5zZXROYW1lKG5hbWUpO1xuXG4gICAgbGV0IGNoYW5nZURldGVjdGVkID0gZmFsc2U7XG4gICAgaWYgKHR5cGUgJiYgKCFwcmV2aW91cyB8fCB0eXBlICE9PSBwcmV2aW91cy50eXBlKSkge1xuICAgICAgY2hhbmdlRGV0ZWN0ZWQgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAobnVtYmVyT2ZDb21wb25lbnRzICYmICghcHJldmlvdXMgfHwgbnVtYmVyT2ZDb21wb25lbnRzICE9PSBwcmV2aW91cy5udW1iZXJPZkNvbXBvbmVudHMpKSB7XG4gICAgICBjaGFuZ2VEZXRlY3RlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHZhbHVlcyAmJiAoY2hhbmdlRGV0ZWN0ZWQgfHwgIXByZXZpb3VzIHx8IHZhbHVlcyAhPT0gcHJldmlvdXMudmFsdWVzKSkge1xuICAgICAgdGhpcy5hcnJheS5zZXREYXRhKGtsYXNzLmZyb20odmFsdWVzKSwgbnVtYmVyT2ZDb21wb25lbnRzKTtcbiAgICB9XG4gIH1cbn1cblxuVnRrRGF0YUFycmF5LmRlZmF1bHRQcm9wcyA9IHtcbiAgbmFtZTogJ3NjYWxhcnMnLFxuICB0eXBlOiAnRmxvYXQzMkFycmF5JyxcbiAgdmFsdWVzOiBbXSxcbiAgbnVtYmVyT2ZDb21wb25lbnRzOiAxLFxuICByZWdpc3RyYXRpb246ICdhZGRBcnJheScsXG59O1xuXG5WdGtEYXRhQXJyYXkucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogVGhlIElEIHVzZWQgdG8gaWRlbnRpZnkgdGhpcyBjb21wb25lbnQgaW4gRGFzaCBjYWxsYmFja3MuXG4gICAqL1xuICBpZDogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogRGFzaC1hc3NpZ25lZCBjYWxsYmFjayB0aGF0IHNob3VsZCBiZSBjYWxsZWQgdG8gcmVwb3J0IHByb3BlcnR5IGNoYW5nZXNcbiAgICogdG8gRGFzaCwgdG8gbWFrZSB0aGVtIGF2YWlsYWJsZSBmb3IgY2FsbGJhY2tzLlxuICAgKi9cbiAgc2V0UHJvcHM6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8vIC0tIHZ0ay5qcyBleHBvc2VkIHByb3BlcnRpZXNcblxuICAvKipcbiAgICogVHlwZWQgYXJyYXkgbmFtZVxuICAgKi9cbiAgdHlwZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogRmllbGQgbmFtZVxuICAgKi9cbiAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogQWN0dWFsIHZhbHVlcyB0byB1c2UgaW5zaWRlIG91ciBhcnJheVxuICAgKi9cbiAgdmFsdWVzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubnVtYmVyKSxcblxuICAvKipcbiAgICogTnVtYmVyIG9mIGNvbXBvbmVudHMgLyBUdXBsZSBzaXplXG4gICAqL1xuICBudW1iZXJPZkNvbXBvbmVudHM6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgLyoqXG4gICAqIE5hbWUgb2YgdGhlIG1ldGhvZCB0byBjYWxsIG9uIHRoZSBmaWVsZERhdGEgKGFkZEFycmF5LCBzZXRTY2FsYXJzLCBzZXRWZWN0b3JzLi4uKVxuICAgKi9cbiAgcmVnaXN0cmF0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBMaXN0IG9mIHJlcHJlc2VudGF0aW9uIHRvIHNob3dcbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubm9kZSksXG4gICAgUHJvcFR5cGVzLm5vZGVcbiAgXSksXG4gIC8qKlxuICAgKiBQYXNzZWQgYnkgcGFyZW50XG4gICAqL1xuICBmaWVsZHM6IFByb3BUeXBlcy5vYmplY3QsXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==