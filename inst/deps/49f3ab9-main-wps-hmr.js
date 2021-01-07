webpackHotUpdatedash_vtk("main",{

/***/ "./src/demo/App.js":
/*!*************************!*\
  !*** ./src/demo/App.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib */ "./src/lib/index.js");
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

/* eslint no-magic-numbers: 0 */



var App = /*#__PURE__*/function (_Component) {
  _inherits(App, _Component);

  var _super = _createSuper(App);

  function App(props) {
    var _this;

    _classCallCheck(this, App);

    _this = _super.call(this, props);
    _this.vtkViewRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    _this.setProps = _this.setProps.bind(_assertThisInitialized(_this));
    _this.onResetCamera = _this.onResetCamera.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(App, [{
    key: "setProps",
    value: function setProps(newProps) {
      this.setState(newProps);
    }
  }, {
    key: "onResetCamera",
    value: function onResetCamera() {
      var view = this.vtkViewRef.current;
      view.resetCamera();
      view.renderView();
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: this.onResetCamera,
        style: {
          position: 'absolute',
          zIndex: 10
        }
      }, "reset camera"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["VtkView"], {
        ref: this.vtkViewRef,
        setProps: this.setProps,
        background: [0.1, 0.1, 0.1]
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["VtkGeometryRepresentation"], {
        colorBy: ['pointData', 'Temperature']
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["VtkPolyDataSource"], {
        points: [0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0],
        polys: [4, 0, 1, 2, 3]
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["VtkPointData"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["VtkDataArray"], {
        name: "Temperature",
        values: [0, 3, 2, 1]
      }))))));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoX3Z0ay8uL3NyYy9kZW1vL0FwcC5qcyJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsInZ0a1ZpZXdSZWYiLCJSZWFjdCIsImNyZWF0ZVJlZiIsInNldFByb3BzIiwiYmluZCIsIm9uUmVzZXRDYW1lcmEiLCJuZXdQcm9wcyIsInNldFN0YXRlIiwidmlldyIsImN1cnJlbnQiLCJyZXNldENhbWVyYSIsInJlbmRlclZpZXciLCJwb3NpdGlvbiIsInpJbmRleCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBOztJQUVNQSxHOzs7OztBQUVGLGVBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLFVBQUwsZ0JBQWtCQyw0Q0FBSyxDQUFDQyxTQUFOLEVBQWxCO0FBQ0EsVUFBS0MsUUFBTCxHQUFnQixNQUFLQSxRQUFMLENBQWNDLElBQWQsK0JBQWhCO0FBQ0EsVUFBS0MsYUFBTCxHQUFxQixNQUFLQSxhQUFMLENBQW1CRCxJQUFuQiwrQkFBckI7QUFKZTtBQUtsQjs7Ozs2QkFFUUUsUSxFQUFVO0FBQ2YsV0FBS0MsUUFBTCxDQUFjRCxRQUFkO0FBQ0g7OztvQ0FFZTtBQUNaLFVBQU1FLElBQUksR0FBRyxLQUFLUixVQUFMLENBQWdCUyxPQUE3QjtBQUNBRCxVQUFJLENBQUNFLFdBQUw7QUFDQUYsVUFBSSxDQUFDRyxVQUFMO0FBQ0g7Ozs2QkFFUTtBQUNMLDBCQUNJLHFGQUNJO0FBQVEsZUFBTyxFQUFFLEtBQUtOLGFBQXRCO0FBQXFDLGFBQUssRUFBRTtBQUFFTyxrQkFBUSxFQUFFLFVBQVo7QUFBd0JDLGdCQUFNLEVBQUU7QUFBaEM7QUFBNUMsd0JBREosZUFFSSwyREFBQyw0Q0FBRDtBQUFTLFdBQUcsRUFBRSxLQUFLYixVQUFuQjtBQUErQixnQkFBUSxFQUFFLEtBQUtHLFFBQTlDO0FBQXdELGtCQUFVLEVBQUUsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVg7QUFBcEUsc0JBQ0ksMkRBQUMsOERBQUQ7QUFDSSxlQUFPLEVBQUUsQ0FBQyxXQUFELEVBQWMsYUFBZDtBQURiLHNCQUdJLDJEQUFDLHNEQUFEO0FBQ0ksY0FBTSxFQUFFLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsRUFBaUIsQ0FBakIsRUFBbUIsQ0FBbkIsRUFBcUIsQ0FBckIsRUFBdUIsQ0FBdkIsQ0FEWjtBQUVJLGFBQUssRUFBRSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFUO0FBRlgsc0JBSUksMkRBQUMsaURBQUQscUJBQ0ksMkRBQUMsaURBQUQ7QUFDSSxZQUFJLEVBQUMsYUFEVDtBQUVJLGNBQU0sRUFBRSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVA7QUFGWixRQURKLENBSkosQ0FISixDQURKLENBRkosQ0FESjtBQXNCSDs7OztFQTFDYVcsK0M7O0FBNkNIaEIsa0VBQWYsRSIsImZpbGUiOiI0OWYzYWI5LW1haW4td3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludCBuby1tYWdpYy1udW1iZXJzOiAwICovXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgVnRrVmlldywgVnRrR2VvbWV0cnlSZXByZXNlbnRhdGlvbiwgVnRrUG9seURhdGFTb3VyY2UsIFZ0a1BvaW50RGF0YSwgVnRrRGF0YUFycmF5IH0gZnJvbSAnLi4vbGliJztcblxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy52dGtWaWV3UmVmID0gUmVhY3QuY3JlYXRlUmVmKCk7XG4gICAgICAgIHRoaXMuc2V0UHJvcHMgPSB0aGlzLnNldFByb3BzLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25SZXNldENhbWVyYSA9IHRoaXMub25SZXNldENhbWVyYS5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIHNldFByb3BzKG5ld1Byb3BzKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUobmV3UHJvcHMpO1xuICAgIH1cblxuICAgIG9uUmVzZXRDYW1lcmEoKSB7XG4gICAgICAgIGNvbnN0IHZpZXcgPSB0aGlzLnZ0a1ZpZXdSZWYuY3VycmVudDtcbiAgICAgICAgdmlldy5yZXNldENhbWVyYSgpO1xuICAgICAgICB2aWV3LnJlbmRlclZpZXcoKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5vblJlc2V0Q2FtZXJhfSBzdHlsZT17eyBwb3NpdGlvbjogJ2Fic29sdXRlJywgekluZGV4OiAxMCB9fT5yZXNldCBjYW1lcmE8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8VnRrVmlldyByZWY9e3RoaXMudnRrVmlld1JlZn0gc2V0UHJvcHM9e3RoaXMuc2V0UHJvcHN9IGJhY2tncm91bmQ9e1swLjEsIDAuMSwgMC4xXX0gPlxuICAgICAgICAgICAgICAgICAgICA8VnRrR2VvbWV0cnlSZXByZXNlbnRhdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JCeT17Wydwb2ludERhdGEnLCAnVGVtcGVyYXR1cmUnXX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFZ0a1BvbHlEYXRhU291cmNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9pbnRzPXtbMCwwLDAsMSwwLDAsMSwxLDAsMCwxLDBdfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvbHlzPXtbNCwwLDEsMiwzXX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VnRrUG9pbnREYXRhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VnRrRGF0YUFycmF5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiVGVtcGVyYXR1cmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzPXtbMCwzLDIsMV19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WdGtQb2ludERhdGE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Z0a1BvbHlEYXRhU291cmNlPlxuICAgICAgICAgICAgICAgICAgICA8L1Z0a0dlb21ldHJ5UmVwcmVzZW50YXRpb24+XG4gICAgICAgICAgICAgICAgPC9WdGtWaWV3PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdLCJzb3VyY2VSb290IjoiIn0=