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
    _this.state = {
      startTheta: 30
    };
    _this.vtkViewRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    _this.setProps = _this.setProps.bind(_assertThisInitialized(_this));
    _this.onResetCamera = _this.onResetCamera.bind(_assertThisInitialized(_this));
    _this.onAngle = _this.onAngle.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(App, [{
    key: "setProps",
    value: function setProps(newProps) {
      this.setState(newProps);
    }
  }, {
    key: "onAngle",
    value: function onAngle(e) {
      this.setState({
        startTheta: Number(e.currentTarget.value)
      });
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
      }, "reset camera"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "range",
        min: "0",
        max: "90",
        onChange: this.onAngle,
        style: {
          position: 'absolute',
          zIndex: 10,
          left: '150px'
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["VtkView"], {
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
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["VtkGeometryRepresentation"], {
        color: [1, 0, 0]
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["VtkAlgorithm"], {
        vtkClass: "vtkConeSource",
        state: {
          resolution: 24,
          radius: 0.2
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["VtkGeometryRepresentation"], {
        colorBy: ['cellData', 'layer']
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["VtkAlgorithm"], {
        vtkClass: "vtkConcentricCylinderSource",
        state: {
          height: 0.25,
          radius: [0.2, 0.3, 0.4, 0.6, 0.7, 0.8, 0.9, 1],
          cellFields: [0, 0.2, 0.4, 0.6, 0.7, 0.8, 0.9, 1],
          mask: [1, 0, 1, 0, 1, 0, 1, 1],
          resolution: 60,
          skipInnerFaces: true,
          startTheta: this.state.startTheta,
          endTheta: 370,
          center: [0, 0, 0.5]
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["VtkGeometryRepresentation"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["VtkReader"], {
        vtkClass: "vtkOBJReader",
        url: "https://kitware.github.io/vtk-js-datasets/data/obj-mtl/star-wars-vader-tie-fighter.obj"
      }))));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoX3Z0ay8uL3NyYy9kZW1vL0FwcC5qcyJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsInN0YXRlIiwic3RhcnRUaGV0YSIsInZ0a1ZpZXdSZWYiLCJSZWFjdCIsImNyZWF0ZVJlZiIsInNldFByb3BzIiwiYmluZCIsIm9uUmVzZXRDYW1lcmEiLCJvbkFuZ2xlIiwibmV3UHJvcHMiLCJzZXRTdGF0ZSIsImUiLCJOdW1iZXIiLCJjdXJyZW50VGFyZ2V0IiwidmFsdWUiLCJ2aWV3IiwiY3VycmVudCIsInJlc2V0Q2FtZXJhIiwicmVuZGVyVmlldyIsInBvc2l0aW9uIiwiekluZGV4IiwibGVmdCIsInJlc29sdXRpb24iLCJyYWRpdXMiLCJoZWlnaHQiLCJjZWxsRmllbGRzIiwibWFzayIsInNraXBJbm5lckZhY2VzIiwiZW5kVGhldGEiLCJjZW50ZXIiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTs7SUFVTUEsRzs7Ozs7QUFFRixlQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFBRUMsZ0JBQVUsRUFBRTtBQUFkLEtBQWI7QUFDQSxVQUFLQyxVQUFMLGdCQUFrQkMsNENBQUssQ0FBQ0MsU0FBTixFQUFsQjtBQUNBLFVBQUtDLFFBQUwsR0FBZ0IsTUFBS0EsUUFBTCxDQUFjQyxJQUFkLCtCQUFoQjtBQUNBLFVBQUtDLGFBQUwsR0FBcUIsTUFBS0EsYUFBTCxDQUFtQkQsSUFBbkIsK0JBQXJCO0FBQ0EsVUFBS0UsT0FBTCxHQUFlLE1BQUtBLE9BQUwsQ0FBYUYsSUFBYiwrQkFBZjtBQU5lO0FBT2xCOzs7OzZCQUVRRyxRLEVBQVU7QUFDZixXQUFLQyxRQUFMLENBQWNELFFBQWQ7QUFDSDs7OzRCQUVPRSxDLEVBQUc7QUFDUCxXQUFLRCxRQUFMLENBQWM7QUFBRVQsa0JBQVUs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R0FSUDtBQVNIQyxnQkFBTSxFQUFFLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxHQUFMO0FBVEw7QUFGWCxRQURKLENBbkJKLGVBbUNJLDJEQUFDLDhEQUFELHFCQUNJLDJEQUFDLDhDQUFEO0FBQ0ksZ0JBQVEsRUFBQyxjQURiO0FBRUksV0FBRyxFQUFDO0FBRlIsUUFESixDQW5DSixDQUhKLENBREo7QUFnREg7Ozs7RUExRWFDLCtDOztBQTZFSGhDLGtFQUFmLEUiLCJmaWxlIjoiM2Y2MDA4Zi1tYWluLXdwcy1obXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQgbm8tbWFnaWMtbnVtYmVyczogMCAqL1xuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7XG4gICAgVnRrVmlldyxcbiAgICBWdGtSZWFkZXIsXG4gICAgVnRrR2VvbWV0cnlSZXByZXNlbnRhdGlvbixcbiAgICBWdGtQb2x5RGF0YVNvdXJjZSxcbiAgICBWdGtQb2ludERhdGEsXG4gICAgVnRrRGF0YUFycmF5LFxuICAgIFZ0a0FsZ29yaXRobSxcbn0gZnJvbSAnLi4vbGliJztcblxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHsgc3RhcnRUaGV0YTogMzAgfTtcbiAgICAgICAgdGhpcy52dGtWaWV3UmVmID0gUmVhY3QuY3JlYXRlUmVmKCk7XG4gICAgICAgIHRoaXMuc2V0UHJvcHMgPSB0aGlzLnNldFByb3BzLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25SZXNldENhbWVyYSA9IHRoaXMub25SZXNldENhbWVyYS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uQW5nbGUgPSB0aGlzLm9uQW5nbGUuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBzZXRQcm9wcyhuZXdQcm9wcykge1xuICAgICAgICB0aGlzLnNldFN0YXRlKG5ld1Byb3BzKTtcbiAgICB9XG5cbiAgICBvbkFuZ2xlKGUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHN0YXJ0VGhldGE6IE51bWJlcihlLmN1cnJlbnRUYXJnZXQudmFsdWUpIH0pO1xuICAgIH1cblxuICAgIG9uUmVzZXRDYW1lcmEoKSB7XG4gICAgICAgIGNvbnN0IHZpZXcgPSB0aGlzLnZ0a1ZpZXdSZWYuY3VycmVudDtcbiAgICAgICAgdmlldy5yZXNldENhbWVyYSgpO1xuICAgICAgICB2aWV3LnJlbmRlclZpZXcoKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5vblJlc2V0Q2FtZXJhfSBzdHlsZT17eyBwb3NpdGlvbjogJ2Fic29sdXRlJywgekluZGV4OiAxMCB9fT5yZXNldCBjYW1lcmE8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhbmdlXCIgbWluPVwiMFwiIG1heD1cIjkwXCIgb25DaGFuZ2U9e3RoaXMub25BbmdsZX0gc3R5bGU9e3sgcG9zaXRpb246ICdhYnNvbHV0ZScsIHpJbmRleDogMTAsIGxlZnQ6ICcxNTBweCcgfX0vPlxuICAgICAgICAgICAgICAgIDxWdGtWaWV3IHJlZj17dGhpcy52dGtWaWV3UmVmfSBzZXRQcm9wcz17dGhpcy5zZXRQcm9wc30gYmFja2dyb3VuZD17WzAuMSwgMC4xLCAwLjFdfSA+XG4gICAgICAgICAgICAgICAgICAgIDxWdGtHZW9tZXRyeVJlcHJlc2VudGF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvckJ5PXtbJ3BvaW50RGF0YScsICdUZW1wZXJhdHVyZSddfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VnRrUG9seURhdGFTb3VyY2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb2ludHM9e1swLDAsMCwxLDAsMCwxLDEsMCwwLDEsMF19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9seXM9e1s0LDAsMSwyLDNdfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWdGtQb2ludERhdGE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWdGtEYXRhQXJyYXlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJUZW1wZXJhdHVyZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXM9e1swLDMsMiwxXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Z0a1BvaW50RGF0YT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVnRrUG9seURhdGFTb3VyY2U+XG4gICAgICAgICAgICAgICAgICAgIDwvVnRrR2VvbWV0cnlSZXByZXNlbnRhdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPFZ0a0dlb21ldHJ5UmVwcmVzZW50YXRpb24gY29sb3I9e1sxLCAwLCAwXX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VnRrQWxnb3JpdGhtIHZ0a0NsYXNzPVwidnRrQ29uZVNvdXJjZVwiIHN0YXRlPXt7IHJlc29sdXRpb246IDI0LCByYWRpdXM6IDAuMiB9fSAvPlxuICAgICAgICAgICAgICAgICAgICA8L1Z0a0dlb21ldHJ5UmVwcmVzZW50YXRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxWdGtHZW9tZXRyeVJlcHJlc2VudGF0aW9uIGNvbG9yQnk9e1snY2VsbERhdGEnLCAnbGF5ZXInXX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VnRrQWxnb3JpdGhtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdnRrQ2xhc3M9XCJ2dGtDb25jZW50cmljQ3lsaW5kZXJTb3VyY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMC4yNSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmFkaXVzOiBbMC4yLCAwLjMsIDAuNCwgMC42LCAwLjcsIDAuOCwgMC45LCAxXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VsbEZpZWxkczogWzAsIDAuMiwgMC40LCAwLjYsIDAuNywgMC44LCAwLjksIDFdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXNrOiBbMSwgMCwgMSwgMCwgMSwgMCwgMSwgMV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdXRpb246IDYwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBza2lwSW5uZXJGYWNlczogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRUaGV0YTogdGhpcy5zdGF0ZS5zdGFydFRoZXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmRUaGV0YTogMzcwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXI6IFswLDAsMC41XSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9WdGtHZW9tZXRyeVJlcHJlc2VudGF0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8VnRrR2VvbWV0cnlSZXByZXNlbnRhdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxWdGtSZWFkZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2dGtDbGFzcz1cInZ0a09CSlJlYWRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsPVwiaHR0cHM6Ly9raXR3YXJlLmdpdGh1Yi5pby92dGstanMtZGF0YXNldHMvZGF0YS9vYmotbXRsL3N0YXItd2Fycy12YWRlci10aWUtZmlnaHRlci5vYmpcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9WdGtHZW9tZXRyeVJlcHJlc2VudGF0aW9uPlxuICAgICAgICAgICAgICAgIDwvVnRrVmlldz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==