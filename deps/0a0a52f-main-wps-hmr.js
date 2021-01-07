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
      console.log('VtkDataArray:', Object.keys(this.props));
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
  // pass by parent
  view: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  representation: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  dataset: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  fields: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoX3Z0ay8uL3NyYy9saWIvY29tcG9uZW50cy9WdGtEYXRhQXJyYXkucmVhY3QuanMiXSwibmFtZXMiOlsiVnRrRGF0YUFycmF5IiwicHJvcHMiLCJhcnJheSIsInZ0a0RhdGFBcnJheSIsIm5ld0luc3RhbmNlIiwiZW1wdHkiLCJjb25zb2xlIiwibG9nIiwiT2JqZWN0Iiwia2V5cyIsImZpZWxkcyIsInJlZ2lzdHJhdGlvbiIsInVwZGF0ZSIsInByZXZQcm9wcyIsInByZXZTdGF0ZSIsInNuYXBzaG90IiwicmVtb3ZlQXJyYXkiLCJwcmV2aW91cyIsIm5hbWUiLCJ0eXBlIiwidmFsdWVzIiwibnVtYmVyT2ZDb21wb25lbnRzIiwia2xhc3MiLCJUWVBFRF9BUlJBWVMiLCJzZXROYW1lIiwiY2hhbmdlRGV0ZWN0ZWQiLCJzZXREYXRhIiwiZnJvbSIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsImlkIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwic2V0UHJvcHMiLCJmdW5jIiwiYXJyYXlPZiIsIm51bWJlciIsImNoaWxkcmVuIiwib25lT2ZUeXBlIiwibm9kZSIsInZpZXciLCJvYmplY3QiLCJyZXByZXNlbnRhdGlvbiIsImRhdGFzZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBQ3FCQSxZOzs7OztBQUNuQix3QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBTUEsS0FBTixFQURpQixDQUdqQjs7QUFDQSxVQUFLQyxLQUFMLEdBQWFDLDRFQUFZLENBQUNDLFdBQWIsQ0FBeUI7QUFBRUMsV0FBSyxFQUFFO0FBQVQsS0FBekIsQ0FBYjtBQUppQjtBQUtsQjs7Ozs2QkFFUTtBQUNQQyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxlQUFa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QUNBO0FBQ0VLLFVBQVEsRUFBRU4saURBQVMsQ0FBQ08sU0FBVixDQUFvQixDQUM1QlAsaURBQVMsQ0FBQ0ksT0FBVixDQUFrQkosaURBQVMsQ0FBQ1EsSUFBNUIsQ0FENEIsRUFFNUJSLGlEQUFTLENBQUNRLElBRmtCLENBQXBCLENBMUNhO0FBK0N2QjtBQUNBQyxNQUFJLEVBQUVULGlEQUFTLENBQUNVLE1BaERPO0FBaUR2QkMsZ0JBQWMsRUFBRVgsaURBQVMsQ0FBQ1UsTUFqREg7QUFrRHZCRSxTQUFPLEVBQUVaLGlEQUFTLENBQUNVLE1BbERJO0FBbUR2QmhDLFFBQU0sRUFBRXNCLGlEQUFTLENBQUNVO0FBbkRLLENBQXpCLEMiLCJmaWxlIjoiMGEwYTUyZi1tYWluLXdwcy1obXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHZ0a0RhdGFBcnJheSBmcm9tICd2dGsuanMvU291cmNlcy9Db21tb24vQ29yZS9EYXRhQXJyYXknO1xuaW1wb3J0IHsgVFlQRURfQVJSQVlTIH0gZnJvbSAndnRrLmpzL1NvdXJjZXMvbWFjcm8nO1xuXG4vKipcbiAqIFZ0a0RhdGFBcnJheSBpcyBjcmVhdGluZyBhIHZ0a0RhdGFBcnJheSBmb3IgdGhlIGNvbnRhaW5lciBmaWVsZHNcbiAqIEl0IHRha2VzIHRoZSBmb2xsb3dpbmcgc2V0IG9mIHByb3BlcnRpZXM6XG4gKiAgIC0gdHlwZTogJ0Zsb2F0MzJBcnJheScsICdGbG9hdDY0QXJyYXknLCAnVWludDE2QXJyYXknLCAuLi5cbiAqICAgLSB2YWx1ZXM6IFtudW1iZXIsIG51bWJlciwgLi4uXVxuICogICAtIG51bWJlck9mQ29tcG9uZW50czogMSxcbiAqICAgLSByZWdpc3RyYXRpb246ICdhZGRBcnJheScsICdzZXRTY2FsYXJzJywgLi4uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZ0a0RhdGFBcnJheSBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgLy8gQ3JlYXRlIHZ0ay5qcyBkYXRhIGFycmF5XG4gICAgdGhpcy5hcnJheSA9IHZ0a0RhdGFBcnJheS5uZXdJbnN0YW5jZSh7IGVtcHR5OiB0cnVlIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnNvbGUubG9nKCdWdGtEYXRhQXJyYXk6JywgT2JqZWN0LmtleXModGhpcy5wcm9wcykpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBmaWVsZHMsIHJlZ2lzdHJhdGlvbiB9ID0gdGhpcy5wcm9wcztcbiAgICB0aGlzLnVwZGF0ZSh0aGlzLnByb3BzKTtcbiAgICBmaWVsZHNbcmVnaXN0cmF0aW9uXSh0aGlzLmFycmF5KTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSwgc25hcHNob3QpIHtcbiAgICB0aGlzLnVwZGF0ZSh0aGlzLnByb3BzLCBwcmV2UHJvcHMpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgY29uc3QgeyBmaWVsZHMgfSA9IHRoaXMucHJvcHM7XG4gICAgZmllbGRzLnJlbW92ZUFycmF5KHRoaXMuYXJyYXkpO1xuICAgIHRoaXMuYXJyYXkuZGVsZXRlKCk7XG4gICAgdGhpcy5hcnJheSA9IG51bGw7XG4gIH1cblxuICB1cGRhdGUocHJvcHMsIHByZXZpb3VzKSB7XG4gICAgY29uc3QgeyBuYW1lLCB0eXBlLCB2YWx1ZXMsIG51bWJlck9mQ29tcG9uZW50cyB9ID0gcHJvcHM7XG4gICAgY29uc3Qga2xhc3MgPSBUWVBFRF9BUlJBWVNbdHlwZV07XG5cbiAgICB0aGlzLmFycmF5LnNldE5hbWUobmFtZSk7XG5cbiAgICBsZXQgY2hhbmdlRGV0ZWN0ZWQgPSBmYWxzZTtcbiAgICBpZiAodHlwZSAmJiAoIXByZXZpb3VzIHx8IHR5cGUgIT09IHByZXZpb3VzLnR5cGUpKSB7XG4gICAgICBjaGFuZ2VEZXRlY3RlZCA9IHRydWU7XG4gICAgfVxuICAgIGlmIChudW1iZXJPZkNvbXBvbmVudHMgJiYgKCFwcmV2aW91cyB8fCBudW1iZXJPZkNvbXBvbmVudHMgIT09IHByZXZpb3VzLm51bWJlck9mQ29tcG9uZW50cykpIHtcbiAgICAgIGNoYW5nZURldGVjdGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodmFsdWVzICYmIChjaGFuZ2VEZXRlY3RlZCB8fCAhcHJldmlvdXMgfHwgdmFsdWVzICE9PSBwcmV2aW91cy52YWx1ZXMpKSB7XG4gICAgICB0aGlzLmFycmF5LnNldERhdGEoa2xhc3MuZnJvbSh2YWx1ZXMpLCBudW1iZXJPZkNvbXBvbmVudHMpO1xuICAgIH1cbiAgfVxufVxuXG5WdGtEYXRhQXJyYXkuZGVmYXVsdFByb3BzID0ge1xuICBuYW1lOiAnc2NhbGFycycsXG4gIHR5cGU6ICdGbG9hdDMyQXJyYXknLFxuICB2YWx1ZXM6IFtdLFxuICBudW1iZXJPZkNvbXBvbmVudHM6IDEsXG4gIHJlZ2lzdHJhdGlvbjogJ2FkZEFycmF5Jyxcbn07XG5cblZ0a0RhdGFBcnJheS5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBUaGUgSUQgdXNlZCB0byBpZGVudGlmeSB0aGlzIGNvbXBvbmVudCBpbiBEYXNoIGNhbGxiYWNrcy5cbiAgICovXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBEYXNoLWFzc2lnbmVkIGNhbGxiYWNrIHRoYXQgc2hvdWxkIGJlIGNhbGxlZCB0byByZXBvcnQgcHJvcGVydHkgY2hhbmdlc1xuICAgKiB0byBEYXNoLCB0byBtYWtlIHRoZW0gYXZhaWxhYmxlIGZvciBjYWxsYmFja3MuXG4gICAqL1xuICBzZXRQcm9wczogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLy8gLS0gdnRrLmpzIGV4cG9zZWQgcHJvcGVydGllc1xuXG4gIC8qKlxuICAgKiBUeXBlZCBhcnJheSBuYW1lXG4gICAqL1xuICB0eXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBGaWVsZCBuYW1lXG4gICAqL1xuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBBY3R1YWwgdmFsdWVzIHRvIHVzZSBpbnNpZGUgb3VyIGFycmF5XG4gICAqL1xuICB2YWx1ZXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5udW1iZXIpLFxuXG4gIC8qKlxuICAgKiBOdW1iZXIgb2YgY29tcG9uZW50cyAvIFR1cGxlIHNpemVcbiAgICovXG4gIG51bWJlck9mQ29tcG9uZW50czogUHJvcFR5cGVzLm51bWJlcixcblxuICAvKipcbiAgICogTmFtZSBvZiB0aGUgbWV0aG9kIHRvIGNhbGwgb24gdGhlIGZpZWxkRGF0YSAoYWRkQXJyYXksIHNldFNjYWxhcnMsIHNldFZlY3RvcnMuLi4pXG4gICAqL1xuICByZWdpc3RyYXRpb246IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIExpc3Qgb2YgcmVwcmVzZW50YXRpb24gdG8gc2hvd1xuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5ub2RlKSxcbiAgICBQcm9wVHlwZXMubm9kZVxuICBdKSxcblxuICAvLyBwYXNzIGJ5IHBhcmVudFxuICB2aWV3OiBQcm9wVHlwZXMub2JqZWN0LFxuICByZXByZXNlbnRhdGlvbjogUHJvcFR5cGVzLm9iamVjdCxcbiAgZGF0YXNldDogUHJvcFR5cGVzLm9iamVjdCxcbiAgZmllbGRzOiBQcm9wVHlwZXMub2JqZWN0LFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=