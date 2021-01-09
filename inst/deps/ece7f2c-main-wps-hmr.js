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
/* harmony import */ var _VtkView_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VtkView.react */ "./src/lib/components/VtkView.react.js");
/* harmony import */ var vtk_js_Sources_Common_Core_DataArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vtk.js/Sources/Common/Core/DataArray */ "./node_modules/vtk.js/Sources/Common/Core/DataArray/index.js");
/* harmony import */ var vtk_js_Sources_macro__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vtk.js/Sources/macro */ "./node_modules/vtk.js/Sources/macro.js");
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

    _this.array = vtk_js_Sources_Common_Core_DataArray__WEBPACK_IMPORTED_MODULE_3__["default"].newInstance({
      empty: true
    });
    return _this;
  }

  _createClass(VtkDataArray, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_VtkView_react__WEBPACK_IMPORTED_MODULE_2__["FieldsContext"].Consumer, null, function (fields) {
        if (!_this2.fields) {
          _this2.fields = fields;
        }
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.update(this.props);
      this.fields[this.props.registration](this.array);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      this.update(this.props, prevProps);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.fields.removeArray(this.array);
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
      var klass = vtk_js_Sources_macro__WEBPACK_IMPORTED_MODULE_4__["TYPED_ARRAYS"][type];
      var changeDetected = false; // NoOp if same...

      this.array.setName(name);

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
  registration: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoX3Z0ay8uL3NyYy9saWIvY29tcG9uZW50cy9WdGtEYXRhQXJyYXkucmVhY3QuanMiXSwibmFtZXMiOlsiVnRrRGF0YUFycmF5IiwicHJvcHMiLCJhcnJheSIsInZ0a0RhdGFBcnJheSIsIm5ld0luc3RhbmNlIiwiZW1wdHkiLCJmaWVsZHMiLCJ1cGRhdGUiLCJyZWdpc3RyYXRpb24iLCJwcmV2UHJvcHMiLCJwcmV2U3RhdGUiLCJzbmFwc2hvdCIsInJlbW92ZUFycmF5IiwicHJldmlvdXMiLCJuYW1lIiwidHlwZSIsInZhbHVlcyIsIm51bWJlck9mQ29tcG9uZW50cyIsImtsYXNzIiwiVFlQRURfQVJSQVlTIiwiY2hhbmdlRGV0ZWN0ZWQiLCJzZXROYW1lIiwic2V0RGF0YSIsImZyb20iLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJpZCIsIlByb3BUeXBlcyIsInN0cmluZyIsInNldFByb3BzIiwiZnVuYyIsImFycmF5T2YiLCJudW1iZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBQ3FCQSxZOzs7OztBQUNuQix3QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBTUEsS0FBTixFQURpQixDQUdqQjs7QUFDQSxVQUFLQyxLQUFMLEdBQWFDLDRFQUFZLENBQUNDLFdBQWIsQ0FBeUI7QUFBRUMsV0FBSyxFQUFFO0FBQVQsS0FBekIsQ0FBYjtBQUppQjtBQUtsQjs7Ozs2QkFFUTtBQUFBOztBQUNQLDBCQUNFLDJEQUFDLDREQUFELENBQWUsUUFBZixRQUNHLFVBQUNDLE1BQUQsRUFBWTtBQUNYLFlBQUksQ0FBQyxNQUFJLENBQUNBLE1BQVYsRUFBa0I7QUFDaEIsZ0JBQUksQ0FBQ0EsTUFBTCxHQUFjQSxNQUFkO0FBQ0Q7QUFDRixPQUxILENBREY7QUFTRDs7O3dDQUVtQjtBQUNsQixXQUFLQyxNQUFMLENBQVksS0FBS04sS0FBakI7QUFDQSxXQUFLSyxNQUFMLENBQVksS0FBS0wsS0FBTCxDQUFXTyxZQUF2QixFQUFxQyxLQUFLTixLQUExQztBQUNEOzs7dUNBRWtCTyxTLEVBQVdDLFMsRUFBV0MsUSxFQUFVO0FBQ2pELFdBQUtKLE1BQUwsQ0FBWSxLQUFLTixLQUFqQixFQUF3QlEsU0FBeEI7QUFDRDs7OzJDQUVzQjtBQUNyQixXQUFLSCxNQUFMLENBQVlNLFdBQVosQ0FBd0IsS0FBS1YsS0FBN0I7QUFDQSxXQUFLQSxLQUFMO0FBQ0EsV0FBS0EsS0FBTCxHQUFhLElBQWI7QUFDRDs7OzJCQUVNRCxLLEVBQU9ZLFEsRUFBVTtBQUFBLFVBQ2RDLElBRGMsR0FDNkJiLEtBRDdCLENBQ2RhLElBRGM7QUFBQSxVQUNSQyxJQURRLEdBQzZCZCxLQUQ3QixDQUNSYyxJQURRO0FBQUEsVUFDRkMsTUFERSxHQUM2QmYsS0FEN0IsQ0FDRmUsTUFERTtBQUFBLFVBQ01DLGtCQUROLEdBQzZCaEIsS0FEN0IsQ0FDTWdCLGtCQUROO0FBRXRCLFVBQU1DLEtBQUssR0FBR0MsaUVBQVksQ0FBQ0osSUFBRCxDQUExQjtBQUNBLFVBQUlLLGNBQWMsR0FBRyxLQUFyQixDQUhzQixDQUt0Qjs7QUFDQSxXQUFLbEIsS0FBTCxDQUFXbUIsT0FBWCxDQUFtQlAsSUFBbkI7O0FBRUEsVUFBSUMsSUFBSSxLQUFLLENBQUNGLFFBQUQsSUFBYUUsSUFBSSxLQUFLRixRQUFRLENBQUNFLElBQXBDLENBQVIsRUFBbUQ7QUFDakRLLHNCQUFjLEdBQUcsSUFBakI7QUFDRDs7QUFFRCxVQUFJSCxrQkFBa0IsS0FBSyxDQUFDSixRQUFELElBQWFJLGtCQUFrQixLQUFLSixRQUFRLENBQUNJLGtCQUFsRCxDQUF0QixFQUE2RjtBQUMzRkcsc0JBQWMsR0FBRyxJQUFqQjtBQUNEOztBQUVELFVBQUlKLE1BQU0sS0FBS0ksY0FBYyxJQUFJLENBQUNQLFFBQW5CLElBQStCRyxNQUFNLEtBQUtILFFBQVEsQ0FBQ0csTUFBeEQsQ0FBVixFQUEyRTtBQUN6RSxhQUFLZCxLQUFMLENBQVdvQixPQUFYLENBQW1CSixLQUFLLENBQUNLLElBQU4sQ0FBV1AsTUFBWCxDQUFuQixFQUF1Q0Msa0JBQXZDO0FBQ0Q7QUFDRjs7OztFQXREdUNPLCtDOzs7QUF5RDFDeEIsWUFBWSxDQUFDeUIsWUFBYixHQUE0QjtBQUMxQlgsTUFBSSxFQUFFLFNBRG9CO0FBRTFCQyxNQUFJLEVBQUUsY0FGb0I7QUFHMUJDLFFBQU0sRUFBRSxFQUhrQjtBQUkxQkMsb0JBQWtCLEVBQUUsQ0FKTTtBQUsxQlQsY0FBWSxFQUFFO0FBTFksQ0FBNUI7QUFRQVIsWUFBWSxDQUFDMEIsU0FBYixHQUF5QjtBQUN2QjtBQUNGO0FBQ0E7QUFDRUMsSUFBRSxFQUFFQyxpREFBUyxDQUFDQyxNQUpTOztBQU12QjtBQUNGO0FBQ0E7QUFDQTtBQUNFQyxVQUFRLEVBQUVGLGlEQUFTLENBQUNHLElBVkc7QUFZdkI7O0FBRUE7QUFDRjtBQUNBO0FBQ0VoQixNQUFJLEVBQUVhLGlEQUFTLENBQUNDLE1BakJPOztBQW1CdkI7QUFDRjtBQUNBO0FBQ0VmLE1BQUksRUFBRWMsaURBQVMsQ0FBQ0MsTUF0Qk87O0FBd0J2QjtBQUNGO0FBQ0E7QUFDRWIsUUFBTSxFQUFFWSxpREFBUyxDQUFDSSxPQUFWLENBQWtCSixpREFBUyxDQUFDSyxNQUE1QixDQTNCZTs7QUE2QnZCO0FBQ0Y7QUFDQTtBQUNFaEIsb0JBQWtCLEVBQUVXLGlEQUFTLENBQUNLLE1BaENQOztBQWtDdkI7QUFDRjtBQUNBO0FBQ0V6QixjQUFZLEVBQUVvQixpREFBUyxDQUFDQztBQXJDRCxDQUF6QixDIiwiZmlsZSI6ImVjZTdmMmMtbWFpbi13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCB7IEZpZWxkc0NvbnRleHQgfSBmcm9tICcuL1Z0a1ZpZXcucmVhY3QnO1xuXG5pbXBvcnQgdnRrRGF0YUFycmF5IGZyb20gJ3Z0ay5qcy9Tb3VyY2VzL0NvbW1vbi9Db3JlL0RhdGFBcnJheSc7XG5pbXBvcnQgeyBUWVBFRF9BUlJBWVMgfSBmcm9tICd2dGsuanMvU291cmNlcy9tYWNybyc7XG5cbi8qKlxuICogVnRrRGF0YUFycmF5IGlzIGNyZWF0aW5nIGEgdnRrRGF0YUFycmF5IGZvciB0aGUgY29udGFpbmVyIGZpZWxkc1xuICogSXQgdGFrZXMgdGhlIGZvbGxvd2luZyBzZXQgb2YgcHJvcGVydGllczpcbiAqICAgLSB0eXBlOiAnRmxvYXQzMkFycmF5JywgJ0Zsb2F0NjRBcnJheScsICdVaW50MTZBcnJheScsIC4uLlxuICogICAtIHZhbHVlczogW251bWJlciwgbnVtYmVyLCAuLi5dXG4gKiAgIC0gbnVtYmVyT2ZDb21wb25lbnRzOiAxLFxuICogICAtIHJlZ2lzdHJhdGlvbjogJ2FkZEFycmF5JywgJ3NldFNjYWxhcnMnLCAuLi5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVnRrRGF0YUFycmF5IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAvLyBDcmVhdGUgdnRrLmpzIGRhdGEgYXJyYXlcbiAgICB0aGlzLmFycmF5ID0gdnRrRGF0YUFycmF5Lm5ld0luc3RhbmNlKHsgZW1wdHk6IHRydWUgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxGaWVsZHNDb250ZXh0LkNvbnN1bWVyPlxuICAgICAgICB7KGZpZWxkcykgPT4ge1xuICAgICAgICAgIGlmICghdGhpcy5maWVsZHMpIHtcbiAgICAgICAgICAgIHRoaXMuZmllbGRzID0gZmllbGRzO1xuICAgICAgICAgIH1cbiAgICAgICAgfX1cbiAgICAgIDwvRmllbGRzQ29udGV4dC5Db25zdW1lcj5cbiAgICApO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy51cGRhdGUodGhpcy5wcm9wcyk7XG4gICAgdGhpcy5maWVsZHNbdGhpcy5wcm9wcy5yZWdpc3RyYXRpb25dKHRoaXMuYXJyYXkpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlLCBzbmFwc2hvdCkge1xuICAgIHRoaXMudXBkYXRlKHRoaXMucHJvcHMsIHByZXZQcm9wcyk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLmZpZWxkcy5yZW1vdmVBcnJheSh0aGlzLmFycmF5KTtcbiAgICB0aGlzLmFycmF5LmRlbGV0ZSgpO1xuICAgIHRoaXMuYXJyYXkgPSBudWxsO1xuICB9XG5cbiAgdXBkYXRlKHByb3BzLCBwcmV2aW91cykge1xuICAgIGNvbnN0IHsgbmFtZSwgdHlwZSwgdmFsdWVzLCBudW1iZXJPZkNvbXBvbmVudHMgfSA9IHByb3BzO1xuICAgIGNvbnN0IGtsYXNzID0gVFlQRURfQVJSQVlTW3R5cGVdO1xuICAgIGxldCBjaGFuZ2VEZXRlY3RlZCA9IGZhbHNlO1xuXG4gICAgLy8gTm9PcCBpZiBzYW1lLi4uXG4gICAgdGhpcy5hcnJheS5zZXROYW1lKG5hbWUpO1xuXG4gICAgaWYgKHR5cGUgJiYgKCFwcmV2aW91cyB8fCB0eXBlICE9PSBwcmV2aW91cy50eXBlKSkge1xuICAgICAgY2hhbmdlRGV0ZWN0ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChudW1iZXJPZkNvbXBvbmVudHMgJiYgKCFwcmV2aW91cyB8fCBudW1iZXJPZkNvbXBvbmVudHMgIT09IHByZXZpb3VzLm51bWJlck9mQ29tcG9uZW50cykpIHtcbiAgICAgIGNoYW5nZURldGVjdGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodmFsdWVzICYmIChjaGFuZ2VEZXRlY3RlZCB8fCAhcHJldmlvdXMgfHwgdmFsdWVzICE9PSBwcmV2aW91cy52YWx1ZXMpKSB7XG4gICAgICB0aGlzLmFycmF5LnNldERhdGEoa2xhc3MuZnJvbSh2YWx1ZXMpLCBudW1iZXJPZkNvbXBvbmVudHMpO1xuICAgIH1cbiAgfVxufVxuXG5WdGtEYXRhQXJyYXkuZGVmYXVsdFByb3BzID0ge1xuICBuYW1lOiAnc2NhbGFycycsXG4gIHR5cGU6ICdGbG9hdDMyQXJyYXknLFxuICB2YWx1ZXM6IFtdLFxuICBudW1iZXJPZkNvbXBvbmVudHM6IDEsXG4gIHJlZ2lzdHJhdGlvbjogJ2FkZEFycmF5Jyxcbn07XG5cblZ0a0RhdGFBcnJheS5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBUaGUgSUQgdXNlZCB0byBpZGVudGlmeSB0aGlzIGNvbXBvbmVudCBpbiBEYXNoIGNhbGxiYWNrcy5cbiAgICovXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBEYXNoLWFzc2lnbmVkIGNhbGxiYWNrIHRoYXQgc2hvdWxkIGJlIGNhbGxlZCB0byByZXBvcnQgcHJvcGVydHkgY2hhbmdlc1xuICAgKiB0byBEYXNoLCB0byBtYWtlIHRoZW0gYXZhaWxhYmxlIGZvciBjYWxsYmFja3MuXG4gICAqL1xuICBzZXRQcm9wczogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLy8gLS0gdnRrLmpzIGV4cG9zZWQgcHJvcGVydGllc1xuXG4gIC8qKlxuICAgKiBUeXBlZCBhcnJheSBuYW1lXG4gICAqL1xuICB0eXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBGaWVsZCBuYW1lXG4gICAqL1xuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBBY3R1YWwgdmFsdWVzIHRvIHVzZSBpbnNpZGUgb3VyIGFycmF5XG4gICAqL1xuICB2YWx1ZXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5udW1iZXIpLFxuXG4gIC8qKlxuICAgKiBOdW1iZXIgb2YgY29tcG9uZW50cyAvIFR1cGxlIHNpemVcbiAgICovXG4gIG51bWJlck9mQ29tcG9uZW50czogUHJvcFR5cGVzLm51bWJlcixcblxuICAvKipcbiAgICogTmFtZSBvZiB0aGUgbWV0aG9kIHRvIGNhbGwgb24gdGhlIGZpZWxkRGF0YSAoYWRkQXJyYXksIHNldFNjYWxhcnMsIHNldFZlY3RvcnMuLi4pXG4gICAqL1xuICByZWdpc3RyYXRpb246IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==