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
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["View"], {
        ref: this.vtkViewRef,
        background: [0.1, 0.1, 0.1]
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["GeometryRepresentation"], {
        mapper: {
          colorByArrayName: 'Temperature',
          scalarMode: 3,
          interpolateScalarsBeforeMapping: true
        },
        colorDataRange: [0, 3]
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["PolyData"], {
        points: [0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0],
        polys: [4, 0, 1, 2, 3]
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["PointData"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["DataArray"], {
        name: "Temperature",
        values: [0, 3, 2, 1]
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["GeometryRepresentation"], {
        color: [1, 0, 0],
        property: {
          edgeVisibility: true
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["Algorithm"], {
        vtkClass: "vtkConeSource",
        state: {
          resolution: Math.round(this.state.startTheta / 2) + 3,
          radius: 0.2
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["GeometryRepresentation"], {
        mapper: {
          colorByArrayName: 'layer',
          scalarMode: 4,
          interpolateScalarsBeforeMapping: false
        },
        colorMapPreset: "jet",
        colorDataRange: [0.2, 0.9]
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["Algorithm"], {
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
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["GeometryRepresentation"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["Reader"], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoX3Z0ay8uL3NyYy9kZW1vL0FwcC5qcyJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsInN0YXRlIiwic3RhcnRUaGV0YSIsInZ0a1ZpZXdSZWYiLCJSZWFjdCIsImNyZWF0ZVJlZiIsInNldFByb3BzIiwiYmluZCIsIm9uUmVzZXRDYW1lcmEiLCJvbkFuZ2xlIiwibmV3UHJvcHMiLCJzZXRTdGF0ZSIsImUiLCJOdW1iZXIiLCJjdXJyZW50VGFyZ2V0IiwidmFsdWUiLCJ2aWV3IiwiY3VycmVudCIsInJlc2V0Q2FtZXJhIiwicmVuZGVyVmlldyIsInBvc2l0aW9uIiwiekluZGV4IiwibGVmdCIsImNvbG9yQnlBcnJheU5hbWUiLCJzY2FsYXJNb2RlIiwiaW50ZXJwb2xhdGVTY2FsYXJzQmVmb3JlTWFwcGluZyIsImVkZ2VWaXNpYmlsaXR5IiwicmVzb2x1dGlvbiIsIk1hdGgiLCJyb3VuZCIsInJhZGl1cyIsImhlaWdodCIsImNlbGxGaWVsZHMiLCJtYXNrIiwic2tpcElubmVyRmFjZXMiLCJlbmRUaGV0YSIsImNlbnRlciIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBOztJQVVNQSxHOzs7OztBQUVGLGVBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUFFQyxnQkFBVSxFQUFFO0FBQWQsS0FBYjtBQUNBLFVBQUtDLFVBQUwsZ0JBQWtCQyw0Q0FBSyxDQUFDQyxTQUFOLEVBQWxCO0FBQ0EsVUFBS0MsUUFBTCxHQUFnQixNQUFLQSxRQUFMLENBQWNDLElBQWQsK0JBQWhCO0FBQ0EsVUFBS0MsYUFBTCxHQUFxQixNQUFLQSxhQUFMLENBQW1CRCxJQUFuQiwrQkFBckI7QUFDQSxVQUFLRSxPQUFMLEdBQWUsTUFBS0EsT0FBTCxDQUFhRixJQUFiLCtCQUFmO0FBTmU7QUFPbEI7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QUFxQixHQUFyQixFQUEwQixHQUExQixFQUErQixHQUEvQixFQUFvQyxDQUFwQyxDQUZMO0FBR0hFLG9CQUFVLEVBQUUsQ0FBQyxDQUFELEVBQUksR0FBSixFQUFTLEdBQVQsRUFBYyxHQUFkLEVBQW1CLEdBQW5CLEVBQXdCLEdBQXhCLEVBQTZCLEdBQTdCLEVBQWtDLENBQWxDLENBSFQ7QUFJSEMsY0FBSSxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsQ0FKSDtBQUtITixvQkFBVSxFQUFFLEVBTFQ7QUFNSE8sd0JBQWMsRUFBRSxJQU5iO0FBT0hoQyxvQkFBVSxFQUFFLEtBQUtELEtBQUwsQ0FBV0MsVUFQcEI7QUFRSGlDLGtCQUFRLEVBQUUsR0FSUDtBQVNIQyxnQkFBTSxFQUFFLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxHQUFMO0FBVEw7QUFGWCxRQVRKLENBbkNKLGVBMkRJLDJEQUFDLDJEQUFELHFCQUNJLDJEQUFDLDJDQUFEO0FBQ0ksZ0JBQVEsRUFBQyxjQURiO0FBRUksV0FBRyxFQUFDO0FBRlIsUUFESixDQTNESixDQUhKLENBREo7QUF3RUg7Ozs7RUFsR2FDLCtDOztBQXFHSHRDLGtFQUFmLEUiLCJmaWxlIjoiZWRmZjFiOS1tYWluLXdwcy1obXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQgbm8tbWFnaWMtbnVtYmVyczogMCAqL1xuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7XG4gICAgVmlldyxcbiAgICBSZWFkZXIsXG4gICAgR2VvbWV0cnlSZXByZXNlbnRhdGlvbixcbiAgICBQb2x5RGF0YSxcbiAgICBQb2ludERhdGEsXG4gICAgRGF0YUFycmF5LFxuICAgIEFsZ29yaXRobSxcbn0gZnJvbSAnLi4vbGliJztcblxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHsgc3RhcnRUaGV0YTogMzAgfTtcbiAgICAgICAgdGhpcy52dGtWaWV3UmVmID0gUmVhY3QuY3JlYXRlUmVmKCk7XG4gICAgICAgIHRoaXMuc2V0UHJvcHMgPSB0aGlzLnNldFByb3BzLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25SZXNldENhbWVyYSA9IHRoaXMub25SZXNldENhbWVyYS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uQW5nbGUgPSB0aGlzLm9uQW5nbGUuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBzZXRQcm9wcyhuZXdQcm9wcykge1xuICAgICAgICB0aGlzLnNldFN0YXRlKG5ld1Byb3BzKTtcbiAgICB9XG5cbiAgICBvbkFuZ2xlKGUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHN0YXJ0VGhldGE6IE51bWJlcihlLmN1cnJlbnRUYXJnZXQudmFsdWUpIH0pO1xuICAgIH1cblxuICAgIG9uUmVzZXRDYW1lcmEoKSB7XG4gICAgICAgIGNvbnN0IHZpZXcgPSB0aGlzLnZ0a1ZpZXdSZWYuY3VycmVudDtcbiAgICAgICAgdmlldy5yZXNldENhbWVyYSgpO1xuICAgICAgICB2aWV3LnJlbmRlclZpZXcoKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5vblJlc2V0Q2FtZXJhfSBzdHlsZT17eyBwb3NpdGlvbjogJ2Fic29sdXRlJywgekluZGV4OiAxMCB9fT5yZXNldCBjYW1lcmE8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhbmdlXCIgbWluPVwiMFwiIG1heD1cIjkwXCIgb25DaGFuZ2U9e3RoaXMub25BbmdsZX0gc3R5bGU9e3sgcG9zaXRpb246ICdhYnNvbHV0ZScsIHpJbmRleDogMTAsIGxlZnQ6ICcxNTBweCcgfX0vPlxuICAgICAgICAgICAgICAgIDxWaWV3IHJlZj17dGhpcy52dGtWaWV3UmVmfSBiYWNrZ3JvdW5kPXtbMC4xLCAwLjEsIDAuMV19ID5cbiAgICAgICAgICAgICAgICAgICAgPEdlb21ldHJ5UmVwcmVzZW50YXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcHBlcj17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yQnlBcnJheU5hbWU6ICdUZW1wZXJhdHVyZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGFyTW9kZTogMyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnRlcnBvbGF0ZVNjYWxhcnNCZWZvcmVNYXBwaW5nOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yRGF0YVJhbmdlPXtbMCwgM119XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxQb2x5RGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50cz17WzAsMCwwLDEsMCwwLDEsMSwwLDAsMSwwXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb2x5cz17WzQsMCwxLDIsM119XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBvaW50RGF0YT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERhdGFBcnJheVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIlRlbXBlcmF0dXJlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcz17WzAsMywyLDFdfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUG9pbnREYXRhPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Qb2x5RGF0YT5cbiAgICAgICAgICAgICAgICAgICAgPC9HZW9tZXRyeVJlcHJlc2VudGF0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8R2VvbWV0cnlSZXByZXNlbnRhdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9e1sxLCAwLCAwXX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5PXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRnZVZpc2liaWxpdHk6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QWxnb3JpdGhtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdnRrQ2xhc3M9XCJ2dGtDb25lU291cmNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHV0aW9uOiBNYXRoLnJvdW5kKHRoaXMuc3RhdGUuc3RhcnRUaGV0YSAvIDIpICsgMyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmFkaXVzOiAwLjIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvR2VvbWV0cnlSZXByZXNlbnRhdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPEdlb21ldHJ5UmVwcmVzZW50YXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcHBlcj17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yQnlBcnJheU5hbWU6ICdsYXllcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGFyTW9kZTogNCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnRlcnBvbGF0ZVNjYWxhcnNCZWZvcmVNYXBwaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvck1hcFByZXNldD1cImpldFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvckRhdGFSYW5nZT17WzAuMiwgMC45XX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEFsZ29yaXRobVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZ0a0NsYXNzPVwidnRrQ29uY2VudHJpY0N5bGluZGVyU291cmNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDAuMjUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhZGl1czogWzAuMiwgMC4zLCAwLjQsIDAuNiwgMC43LCAwLjgsIDAuOSwgMV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbGxGaWVsZHM6IFswLCAwLjIsIDAuNCwgMC42LCAwLjcsIDAuOCwgMC45LCAxXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFzazogWzEsIDAsIDEsIDAsIDEsIDAsIDEsIDFdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHV0aW9uOiA2MCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2tpcElubmVyRmFjZXM6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0VGhldGE6IHRoaXMuc3RhdGUuc3RhcnRUaGV0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kVGhldGE6IDM3MCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyOiBbMCwwLDAuNV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvR2VvbWV0cnlSZXByZXNlbnRhdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPEdlb21ldHJ5UmVwcmVzZW50YXRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UmVhZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdnRrQ2xhc3M9XCJ2dGtPQkpSZWFkZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybD1cImh0dHBzOi8va2l0d2FyZS5naXRodWIuaW8vdnRrLWpzLWRhdGFzZXRzL2RhdGEvb2JqLW10bC9zdGFyLXdhcnMtdmFkZXItdGllLWZpZ2h0ZXIub2JqXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvR2VvbWV0cnlSZXByZXNlbnRhdGlvbj5cbiAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdLCJzb3VyY2VSb290IjoiIn0=