webpackHotUpdatedash_vtk("main",{

/***/ "./src/lib/components/VtkPolyData.react.js":
/*!*************************************************!*\
  !*** ./src/lib/components/VtkPolyData.react.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VtkPolyDataSource; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vtk_js_Sources_Common_DataModel_PolyData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vtk.js/Sources/Common/DataModel/PolyData */ "./node_modules/vtk.js/Sources/Common/DataModel/PolyData/index.js");
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
 * VtkPolyDataSource is exposing a polydata to a downstream filter or representation
 * It takes the following set of properties:
 *   - points: [x, y, z, x, y, z, ...],
 *   - verts: [cellSize, pointId0, pointId1, ..., cellSize, pointId0, ...]
 *   - lines: [cellSize, pointId0, pointId1, ..., cellSize, pointId0, ...]
 *   - polys: [cellSize, pointId0, pointId1, ..., cellSize, pointId0, ...]
 *   - strips: [cellSize, pointId0, pointId1, ..., cellSize, pointId0, ...]
 *   - pointCloud: false/true (if on it will generate verts automatically)
 * It provides the following properties to its children:
 *   - pass along: 'view', 'representation`, `setProps`
 *   - `dataset` == `this.dataset`
 */

var VtkPolyDataSource = /*#__PURE__*/function (_Component) {
  _inherits(VtkPolyDataSource, _Component);

  var _super = _createSuper(VtkPolyDataSource);

  function VtkPolyDataSource(props) {
    var _this;

    _classCallCheck(this, VtkPolyDataSource);

    _this = _super.call(this, props); // Create vtk.js polydata

    _this.polydata = vtk_js_Sources_Common_DataModel_PolyData__WEBPACK_IMPORTED_MODULE_2__["default"].newInstance();
    return _this;
  }

  _createClass(VtkPolyDataSource, [{
    key: "render",
    value: function render() {
      console.log('VtkPolyDataSource', this.props);
      var _this$props = this.props,
          id = _this$props.id,
          setProps = _this$props.setProps,
          children = _this$props.children,
          view = _this$props.view,
          representation = _this$props.representation;
      var addOnProps = {
        dataset: this.polydata,
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
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props2 = this.props,
          downstream = _this$props2.downstream,
          port = _this$props2.port;
      this.update(this.props);
      downstream.setInputData(this.polydata, port);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      this.update(this.props, prevProps);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.polydata["delete"]();
      this.polydata = null;
    }
  }, {
    key: "update",
    value: function update(props, previous) {
      var pointCloud = props.pointCloud,
          points = props.points,
          verts = props.verts,
          lines = props.lines,
          polys = props.polys,
          strips = props.strips;
      var changeDetected = false;
      var pointChanged = false;

      if (points && (!previous || points !== previous.points)) {
        this.polydata.getPoints().setData(Float32Array.from(points), 3);
        pointChanged = true;
        changeDetected = true;
      }

      if (verts && (!previous || verts !== previous.verts)) {
        this.polydata.getVerts().setData(Uint16Array.from(verts));
        changeDetected = true;
      }

      if (lines && (!previous || lines !== previous.lines)) {
        this.polydata.getLines().setData(Uint16Array.from(lines));
        changeDetected = true;
      }

      if (polys && (!previous || polys !== previous.polys)) {
        this.polydata.getPolys().setData(Uint16Array.from(polys));
        changeDetected = true;
      }

      if (strips && (!previous || strips !== previous.strips)) {
        this.polydata.getStrips().setData(Uint16Array.from(strips));
        changeDetected = true;
      }

      if (pointCloud && (pointChanged || !previous || pointCloud !== previous.pointCloud)) {
        var nbPoints = points.length / 3;
        var values = new Uint16Array(nbPoints + 1);
        values[0] = nbPoints;

        for (var i = 0; i < nbPoints; i++) {
          values[i + 1] = i;
        }

        this.polydata.getVerts().setData(values);
        changeDetected = true;
      }

      if (changeDetected) {
        this.polydata.modified();
      }
    }
  }]);

  return VtkPolyDataSource;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);


VtkPolyDataSource.defaultProps = {
  port: 0,
  points: [],
  pointCloud: false
};
VtkPolyDataSource.propTypes = {
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
   * downstream connection port
   */
  port: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * xyz coordinates
   */
  points: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number),

  /**
   * verts cells
   */
  verts: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number),

  /**
   * lines cells
   */
  lines: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number),

  /**
   * polys cells
   */
  polys: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number),

  /**
   * strips cells
   */
  strips: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number),

  /**
   * Is it point cloud
   */
  pointCloud: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * List of representation to show
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node), prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node]),

  /**
   * Passed by parent
   */
  view: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,

  /**
   * Passed by parent
   */
  representation: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoX3Z0ay8uL3NyYy9saWIvY29tcG9uZW50cy9WdGtQb2x5RGF0YS5yZWFjdC5qcyJdLCJuYW1lcyI6WyJWdGtQb2x5RGF0YVNvdXJjZSIsInByb3BzIiwicG9seWRhdGEiLCJ2dGtQb2x5RGF0YSIsIm5ld0luc3RhbmNlIiwiY29uc29sZSIsImxvZyIsImlkIiwic2V0UHJvcHMiLCJjaGlsZHJlbiIsInZpZXciLCJyZXByZXNlbnRhdGlvbiIsImFkZE9uUHJvcHMiLCJkYXRhc2V0IiwiY2hpbGRyZW5XaXRoVmlld1Byb3AiLCJSZWFjdCIsIkNoaWxkcmVuIiwibWFwIiwiY2hpbGQiLCJjbG9uZUVsZW1lbnQiLCJkb3duc3RyZWFtIiwicG9ydCIsInVwZGF0ZSIsInNldElucHV0RGF0YSIsInByZXZQcm9wcyIsInByZXZTdGF0ZSIsInNuYXBzaG90IiwicHJldmlvdXMiLCJwb2ludENsb3VkIiwicG9pbnRzIiwidmVydHMiLCJsaW5lcyIsInBvbHlzIiwic3RyaXBzIiwiY2hhbmdlRGV0ZWN0ZWQiLCJwb2ludENoYW5nZWQiLCJnZXRQb2ludHMiLCJzZXREYXRhIiwiRmxvYXQzMkFycmF5IiwiZnJvbSIsImdldFZlcnRzIiwiVWludDE2QXJyYXkiLCJnZXRMaW5lcyIsImdldFBvbHlzIiwiZ2V0U3RyaXBzIiwibmJQb2ludHMiLCJsZW5ndGgiLCJ2YWx1ZXMiLCJpIiwibW9kaWZpZWQiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJmdW5jIiwibnVtYmVyIiwiYXJyYXlPZiIsImJvb2wiLCJvbmVPZlR5cGUiLCJub2RlIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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TSxFQUFFb0IsaURBQVMsQ0FBQ0ksT0FBVixDQUFrQkosaURBQVMsQ0FBQ0csTUFBNUIsQ0ExQ29COztBQTRDNUI7QUFDRjtBQUNBO0FBQ0U1QixZQUFVLEVBQUV5QixpREFBUyxDQUFDSyxJQS9DTTs7QUFpRDVCO0FBQ0Y7QUFDQTtBQUNFakQsVUFBUSxFQUFFNEMsaURBQVMsQ0FBQ00sU0FBVixDQUFvQixDQUM1Qk4saURBQVMsQ0FBQ0ksT0FBVixDQUFrQkosaURBQVMsQ0FBQ08sSUFBNUIsQ0FENEIsRUFFNUJQLGlEQUFTLENBQUNPLElBRmtCLENBQXBCLENBcERrQjs7QUF3RDVCO0FBQ0Y7QUFDQTtBQUNFbEQsTUFBSSxFQUFFMkMsaURBQVMsQ0FBQ1EsTUEzRFk7O0FBNEQ1QjtBQUNGO0FBQ0E7QUFDRWxELGdCQUFjLEVBQUUwQyxpREFBUyxDQUFDUTtBQS9ERSxDQUE5QixDIiwiZmlsZSI6IjMyMDhjOWItbWFpbi13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCB2dGtQb2x5RGF0YSBmcm9tICd2dGsuanMvU291cmNlcy9Db21tb24vRGF0YU1vZGVsL1BvbHlEYXRhJztcblxuLyoqXG4gKiBWdGtQb2x5RGF0YVNvdXJjZSBpcyBleHBvc2luZyBhIHBvbHlkYXRhIHRvIGEgZG93bnN0cmVhbSBmaWx0ZXIgb3IgcmVwcmVzZW50YXRpb25cbiAqIEl0IHRha2VzIHRoZSBmb2xsb3dpbmcgc2V0IG9mIHByb3BlcnRpZXM6XG4gKiAgIC0gcG9pbnRzOiBbeCwgeSwgeiwgeCwgeSwgeiwgLi4uXSxcbiAqICAgLSB2ZXJ0czogW2NlbGxTaXplLCBwb2ludElkMCwgcG9pbnRJZDEsIC4uLiwgY2VsbFNpemUsIHBvaW50SWQwLCAuLi5dXG4gKiAgIC0gbGluZXM6IFtjZWxsU2l6ZSwgcG9pbnRJZDAsIHBvaW50SWQxLCAuLi4sIGNlbGxTaXplLCBwb2ludElkMCwgLi4uXVxuICogICAtIHBvbHlzOiBbY2VsbFNpemUsIHBvaW50SWQwLCBwb2ludElkMSwgLi4uLCBjZWxsU2l6ZSwgcG9pbnRJZDAsIC4uLl1cbiAqICAgLSBzdHJpcHM6IFtjZWxsU2l6ZSwgcG9pbnRJZDAsIHBvaW50SWQxLCAuLi4sIGNlbGxTaXplLCBwb2ludElkMCwgLi4uXVxuICogICAtIHBvaW50Q2xvdWQ6IGZhbHNlL3RydWUgKGlmIG9uIGl0IHdpbGwgZ2VuZXJhdGUgdmVydHMgYXV0b21hdGljYWxseSlcbiAqIEl0IHByb3ZpZGVzIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllcyB0byBpdHMgY2hpbGRyZW46XG4gKiAgIC0gcGFzcyBhbG9uZzogJ3ZpZXcnLCAncmVwcmVzZW50YXRpb25gLCBgc2V0UHJvcHNgXG4gKiAgIC0gYGRhdGFzZXRgID09IGB0aGlzLmRhdGFzZXRgXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZ0a1BvbHlEYXRhU291cmNlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAvLyBDcmVhdGUgdnRrLmpzIHBvbHlkYXRhXG4gICAgdGhpcy5wb2x5ZGF0YSA9IHZ0a1BvbHlEYXRhLm5ld0luc3RhbmNlKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc29sZS5sb2coJ1Z0a1BvbHlEYXRhU291cmNlJywgdGhpcy5wcm9wcyk7XG4gICAgY29uc3QgeyBpZCwgc2V0UHJvcHMsIGNoaWxkcmVuLCB2aWV3LCByZXByZXNlbnRhdGlvbiB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBhZGRPblByb3BzID0ge1xuICAgICAgZGF0YXNldDogdGhpcy5wb2x5ZGF0YSxcbiAgICAgIHJlcHJlc2VudGF0aW9uLFxuICAgICAgdmlldyxcbiAgICAgIHNldFByb3BzLFxuICAgIH07XG4gICAgY29uc3QgY2hpbGRyZW5XaXRoVmlld1Byb3AgPSBSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIGNoaWxkID0+IFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgYWRkT25Qcm9wcykpO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGlkPXtpZH0+XG4gICAgICAgIHtjaGlsZHJlbldpdGhWaWV3UHJvcH1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IGRvd25zdHJlYW0sIHBvcnQgfSA9IHRoaXMucHJvcHM7XG4gICAgdGhpcy51cGRhdGUodGhpcy5wcm9wcyk7XG4gICAgZG93bnN0cmVhbS5zZXRJbnB1dERhdGEodGhpcy5wb2x5ZGF0YSwgcG9ydCk7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUsIHNuYXBzaG90KSB7XG4gICAgdGhpcy51cGRhdGUodGhpcy5wcm9wcywgcHJldlByb3BzKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMucG9seWRhdGEuZGVsZXRlKCk7XG4gICAgdGhpcy5wb2x5ZGF0YSA9IG51bGw7XG4gIH1cblxuICB1cGRhdGUocHJvcHMsIHByZXZpb3VzKSB7XG4gICAgY29uc3QgeyBwb2ludENsb3VkLCBwb2ludHMsIHZlcnRzLCBsaW5lcywgcG9seXMsIHN0cmlwcyB9ID0gcHJvcHM7XG4gICAgbGV0IGNoYW5nZURldGVjdGVkID0gZmFsc2U7XG4gICAgbGV0IHBvaW50Q2hhbmdlZCA9IGZhbHNlO1xuICAgIGlmIChwb2ludHMgJiYgKCFwcmV2aW91cyB8fCBwb2ludHMgIT09IHByZXZpb3VzLnBvaW50cykpIHtcbiAgICAgIHRoaXMucG9seWRhdGEuZ2V0UG9pbnRzKCkuc2V0RGF0YShGbG9hdDMyQXJyYXkuZnJvbShwb2ludHMpLCAzKTtcbiAgICAgIHBvaW50Q2hhbmdlZCA9IHRydWU7XG4gICAgICBjaGFuZ2VEZXRlY3RlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHZlcnRzICYmICghcHJldmlvdXMgfHwgdmVydHMgIT09IHByZXZpb3VzLnZlcnRzKSkge1xuICAgICAgdGhpcy5wb2x5ZGF0YS5nZXRWZXJ0cygpLnNldERhdGEoVWludDE2QXJyYXkuZnJvbSh2ZXJ0cykpO1xuICAgICAgY2hhbmdlRGV0ZWN0ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChsaW5lcyAmJiAoIXByZXZpb3VzIHx8IGxpbmVzICE9PSBwcmV2aW91cy5saW5lcykpIHtcbiAgICAgIHRoaXMucG9seWRhdGEuZ2V0TGluZXMoKS5zZXREYXRhKFVpbnQxNkFycmF5LmZyb20obGluZXMpKTtcbiAgICAgIGNoYW5nZURldGVjdGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAocG9seXMgJiYgKCFwcmV2aW91cyB8fCBwb2x5cyAhPT0gcHJldmlvdXMucG9seXMpKSB7XG4gICAgICB0aGlzLnBvbHlkYXRhLmdldFBvbHlzKCkuc2V0RGF0YShVaW50MTZBcnJheS5mcm9tKHBvbHlzKSk7XG4gICAgICBjaGFuZ2VEZXRlY3RlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHN0cmlwcyAmJiAoIXByZXZpb3VzIHx8IHN0cmlwcyAhPT0gcHJldmlvdXMuc3RyaXBzKSkge1xuICAgICAgdGhpcy5wb2x5ZGF0YS5nZXRTdHJpcHMoKS5zZXREYXRhKFVpbnQxNkFycmF5LmZyb20oc3RyaXBzKSk7XG4gICAgICBjaGFuZ2VEZXRlY3RlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHBvaW50Q2xvdWQgJiYgKHBvaW50Q2hhbmdlZCB8fCAhcHJldmlvdXMgfHwgcG9pbnRDbG91ZCAhPT0gcHJldmlvdXMucG9pbnRDbG91ZCkpIHtcbiAgICAgIGNvbnN0IG5iUG9pbnRzID0gcG9pbnRzLmxlbmd0aCAvIDM7XG4gICAgICBjb25zdCB2YWx1ZXMgPSBuZXcgVWludDE2QXJyYXkobmJQb2ludHMgKyAxKTtcbiAgICAgIHZhbHVlc1swXSA9IG5iUG9pbnRzO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuYlBvaW50czsgaSsrKSB7XG4gICAgICAgIHZhbHVlc1tpICsgMV0gPSBpO1xuICAgICAgfVxuICAgICAgdGhpcy5wb2x5ZGF0YS5nZXRWZXJ0cygpLnNldERhdGEodmFsdWVzKTtcbiAgICAgIGNoYW5nZURldGVjdGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoY2hhbmdlRGV0ZWN0ZWQpIHtcbiAgICAgIHRoaXMucG9seWRhdGEubW9kaWZpZWQoKTtcbiAgICB9XG4gIH1cbn1cblxuVnRrUG9seURhdGFTb3VyY2UuZGVmYXVsdFByb3BzID0ge1xuICBwb3J0OiAwLFxuICBwb2ludHM6IFtdLFxuICBwb2ludENsb3VkOiBmYWxzZSxcbn07XG5cblZ0a1BvbHlEYXRhU291cmNlLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIFRoZSBJRCB1c2VkIHRvIGlkZW50aWZ5IHRoaXMgY29tcG9uZW50IGluIERhc2ggY2FsbGJhY2tzLlxuICAgKi9cbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIERhc2gtYXNzaWduZWQgY2FsbGJhY2sgdGhhdCBzaG91bGQgYmUgY2FsbGVkIHRvIHJlcG9ydCBwcm9wZXJ0eSBjaGFuZ2VzXG4gICAqIHRvIERhc2gsIHRvIG1ha2UgdGhlbSBhdmFpbGFibGUgZm9yIGNhbGxiYWNrcy5cbiAgICovXG4gIHNldFByb3BzOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvLyAtLSB2dGsuanMgZXhwb3NlZCBwcm9wZXJ0aWVzXG5cbiAgLyoqXG4gICAqIGRvd25zdHJlYW0gY29ubmVjdGlvbiBwb3J0XG4gICAqL1xuICBwb3J0OiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gIC8qKlxuICAgKiB4eXogY29vcmRpbmF0ZXNcbiAgICovXG4gIHBvaW50czogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm51bWJlciksXG5cbiAgLyoqXG4gICAqIHZlcnRzIGNlbGxzXG4gICAqL1xuICB2ZXJ0czogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm51bWJlciksXG5cbiAgLyoqXG4gICAqIGxpbmVzIGNlbGxzXG4gICAqL1xuICBsaW5lczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm51bWJlciksXG5cbiAgLyoqXG4gICAqIHBvbHlzIGNlbGxzXG4gICAqL1xuICBwb2x5czogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm51bWJlciksXG5cbiAgLyoqXG4gICAqIHN0cmlwcyBjZWxsc1xuICAgKi9cbiAgc3RyaXBzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubnVtYmVyKSxcblxuICAvKipcbiAgICogSXMgaXQgcG9pbnQgY2xvdWRcbiAgICovXG4gIHBvaW50Q2xvdWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBMaXN0IG9mIHJlcHJlc2VudGF0aW9uIHRvIHNob3dcbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubm9kZSksXG4gICAgUHJvcFR5cGVzLm5vZGVcbiAgXSksXG4gIC8qKlxuICAgKiBQYXNzZWQgYnkgcGFyZW50XG4gICAqL1xuICB2aWV3OiBQcm9wVHlwZXMub2JqZWN0LFxuICAvKipcbiAgICogUGFzc2VkIGJ5IHBhcmVudFxuICAgKi9cbiAgcmVwcmVzZW50YXRpb246IFByb3BUeXBlcy5vYmplY3QsXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==