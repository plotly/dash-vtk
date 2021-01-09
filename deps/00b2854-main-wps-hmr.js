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
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["VtkGeometryRepresentation"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["VtkAlgorithm"], {
        vtkClass: "vtkConeSource",
        state: {
          resolution: 24,
          radius: 0.2
        }
      }))));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoX3Z0ay8uL3NyYy9kZW1vL0FwcC5qcyJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsInZ0a1ZpZXdSZWYiLCJSZWFjdCIsImNyZWF0ZVJlZiIsInNldFByb3BzIiwiYmluZCIsIm9uUmVzZXRDYW1lcmEiLCJuZXdQcm9wcyIsInNldFN0YXRlIiwidmlldyIsImN1cnJlbnQiLCJyZXNldENhbWVyYSIsInJlbmRlclZpZXciLCJwb3NpdGlvbiIsInpJbmRleCIsInJlc29sdXRpb24iLCJyYWRpdXMiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTs7SUFFTUEsRzs7Ozs7QUFFRixlQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxVQUFMLGdCQUFrQkMsNENBQUssQ0FBQ0MsU0FBTixFQUFsQjtBQUNBLFVBQUtDLFFBQUwsR0FBZ0IsTUFBS0EsUUFBTCxDQUFjQyxJQUFkLCtCQUFoQjtBQUNBLFVBQUtDLGFBQUwsR0FBcUIsTUFBS0EsYUFBTCxDQUFtQkQsSUFBbkIsK0JBQXJCO0FBSmU7QUFLbEI7Ozs7NkJBRVFFLFEsRUFBVTtBQUNmLFdBQUtDLFFBQUwsQ0FBY0QsUUFBZDtBQUNIOzs7b0NBRWU7QUFDWixVQUFNRSxJQUFJLEdBQUcsS0FBS1IsVUFBTCxDQUFnQlMsT0FBN0I7QUFDQUQsVUFBSSxDQUFDRSxXQUFMO0FBQ0FGLFVBQUksQ0FBQ0csVUFBTDtBQUNIOzs7NkJBRVE7QUFDTCwwQkFDSSxxRkFDSTtBQUFRLGVBQU8sRUFBRSxLQUFLTixhQUF0QjtBQUFxQyxhQUFLLEVBQUU7QUFBRU8sa0JBQVEsRUFBRSxVQUFaO0FBQXdCQyxnQkFBTSxFQUFFO0FBQWhDO0FBQTVDLHdCQURKLGVBRUksMkRBQUMsNENBQUQ7QUFBUyxXQUFHLEVBQUUsS0FBS2IsVUFBbkI7QUFBK0IsZ0JBQVEsRUFBRSxLQUFLRyxRQUE5QztBQUF3RCxrQkFBVSxFQUFFLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYO0FBQXBFLHNCQUNJLDJEQUFDLDhEQUFEO0FBQ0ksZUFBTyxFQUFFLENBQUMsV0FBRCxFQUFjLGFBQWQ7QUFEYixzQkFHSSwyREFBQyxzREFBRDtBQUNJLGNBQU0sRUFBRSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLEVBQWlCLENBQWpCLEVBQW1CLENBQW5CLEVBQXFCLENBQXJCLEVBQXVCLENBQXZCLENBRFo7QUFFSSxhQUFLLEVBQUUsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVDtBQUZYLHNCQUlJLDJEQUFDLGlEQUFELHFCQUNJLDJEQUFDLGlEQUFEO0FBQ0ksWUFBSSxFQUFDLGFBRFQ7QUFFSSxjQUFNLEVBQUUsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQO0FBRlosUUFESixDQUpKLENBSEosQ0FESixlQWdCSSwyREFBQyw4REFBRCxxQkFDSSwyREFBQyxpREFBRDtBQUFjLGdCQUFRLEVBQUMsZUFBdkI7QUFBdUMsYUFBSyxFQUFFO0FBQUVXLG9CQUFVLEVBQUUsRUFBZDtBQUFrQkMsZ0JBQU0sRUFBRTtBQUExQjtBQUE5QyxRQURKLENBaEJKLENBRkosQ0FESjtBQXlCSDs7OztFQTdDYUMsK0M7O0FBZ0RIbEIsa0VBQWYsRSIsImZpbGUiOiIwMGIyODU0LW1haW4td3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludCBuby1tYWdpYy1udW1iZXJzOiAwICovXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgVnRrVmlldywgVnRrR2VvbWV0cnlSZXByZXNlbnRhdGlvbiwgVnRrUG9seURhdGFTb3VyY2UsIFZ0a1BvaW50RGF0YSwgVnRrRGF0YUFycmF5LCBWdGtBbGdvcml0aG0gfSBmcm9tICcuLi9saWInO1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnZ0a1ZpZXdSZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcbiAgICAgICAgdGhpcy5zZXRQcm9wcyA9IHRoaXMuc2V0UHJvcHMuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vblJlc2V0Q2FtZXJhID0gdGhpcy5vblJlc2V0Q2FtZXJhLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgc2V0UHJvcHMobmV3UHJvcHMpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShuZXdQcm9wcyk7XG4gICAgfVxuXG4gICAgb25SZXNldENhbWVyYSgpIHtcbiAgICAgICAgY29uc3QgdmlldyA9IHRoaXMudnRrVmlld1JlZi5jdXJyZW50O1xuICAgICAgICB2aWV3LnJlc2V0Q2FtZXJhKCk7XG4gICAgICAgIHZpZXcucmVuZGVyVmlldygpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLm9uUmVzZXRDYW1lcmF9IHN0eWxlPXt7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCB6SW5kZXg6IDEwIH19PnJlc2V0IGNhbWVyYTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxWdGtWaWV3IHJlZj17dGhpcy52dGtWaWV3UmVmfSBzZXRQcm9wcz17dGhpcy5zZXRQcm9wc30gYmFja2dyb3VuZD17WzAuMSwgMC4xLCAwLjFdfSA+XG4gICAgICAgICAgICAgICAgICAgIDxWdGtHZW9tZXRyeVJlcHJlc2VudGF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvckJ5PXtbJ3BvaW50RGF0YScsICdUZW1wZXJhdHVyZSddfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VnRrUG9seURhdGFTb3VyY2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb2ludHM9e1swLDAsMCwxLDAsMCwxLDEsMCwwLDEsMF19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9seXM9e1s0LDAsMSwyLDNdfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWdGtQb2ludERhdGE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWdGtEYXRhQXJyYXlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJUZW1wZXJhdHVyZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXM9e1swLDMsMiwxXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Z0a1BvaW50RGF0YT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVnRrUG9seURhdGFTb3VyY2U+XG4gICAgICAgICAgICAgICAgICAgIDwvVnRrR2VvbWV0cnlSZXByZXNlbnRhdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPFZ0a0dlb21ldHJ5UmVwcmVzZW50YXRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VnRrQWxnb3JpdGhtIHZ0a0NsYXNzPVwidnRrQ29uZVNvdXJjZVwiIHN0YXRlPXt7IHJlc29sdXRpb246IDI0LCByYWRpdXM6IDAuMiB9fSAvPlxuICAgICAgICAgICAgICAgICAgICA8L1Z0a0dlb21ldHJ5UmVwcmVzZW50YXRpb24+XG4gICAgICAgICAgICAgICAgPC9WdGtWaWV3PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iXSwic291cmNlUm9vdCI6IiJ9