webpackHotUpdatedash_vtk("main",{

/***/ "./src/lib/components/VtkGeometryRepresentation.react.js":
/*!***************************************************************!*\
  !*** ./src/lib/components/VtkGeometryRepresentation.react.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VtkGeometryRepresentation; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _VtkView_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VtkView.react */ "./src/lib/components/VtkView.react.js");
/* harmony import */ var vtk_js_Sources_Rendering_Core_Actor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vtk.js/Sources/Rendering/Core/Actor */ "./node_modules/vtk.js/Sources/Rendering/Core/Actor/index.js");
/* harmony import */ var vtk_js_Sources_Rendering_Core_Mapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vtk.js/Sources/Rendering/Core/Mapper */ "./node_modules/vtk.js/Sources/Rendering/Core/Mapper/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
 * VtkGeometryRepresentation is responsible to convert a vtkPolyData into rendering
 * It takes the following set of properties:
 *   - colorBy: ['POINTS', ''],
 *   - pointSize: 1,
 *   - color: [1,1,1],
 * It provides the following properties to its children:
 *   - 'representation`: this
 *   - `downstream` == `mapper` which should be used to call setInputConnection/setInputData
 */

var VtkGeometryRepresentation = /*#__PURE__*/function (_Component) {
  _inherits(VtkGeometryRepresentation, _Component);

  var _super = _createSuper(VtkGeometryRepresentation);

  function VtkGeometryRepresentation(props) {
    var _this;

    _classCallCheck(this, VtkGeometryRepresentation);

    _this = _super.call(this, props); // Create vtk.js actor/mapper

    _this.actor = vtk_js_Sources_Rendering_Core_Actor__WEBPACK_IMPORTED_MODULE_3__["default"].newInstance();
    _this.mapper = vtk_js_Sources_Rendering_Core_Mapper__WEBPACK_IMPORTED_MODULE_4__["default"].newInstance();

    _this.actor.setMapper(_this.mapper);

    return _this;
  }

  _createClass(VtkGeometryRepresentation, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_VtkView_react__WEBPACK_IMPORTED_MODULE_2__["VueContext"].Consumer, null, function (view) {
        if (!_this2.view) {
          view.renderer.addActor(_this2.actor);
        }

        _this2.view = view;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_VtkView_react__WEBPACK_IMPORTED_MODULE_2__["RepresentationContext"].Provider, {
          value: _this2
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_VtkView_react__WEBPACK_IMPORTED_MODULE_2__["DownstreamContext"].Provider, {
          value: _this2.mapper
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          id: _this2.props.id
        }, _this2.props.children)));
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.update(this.props);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      this.update(this.props, prevProps);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var renderer = this.view.renderer;

      if (renderer) {
        renderer.remoteActor(this.actor);
      }

      this.actor["delete"]();
      this.actor = null;
      this.mapper["delete"]();
      this.mapper = null;
    }
  }, {
    key: "update",
    value: function update(props, previous) {
      var pointSize = props.pointSize,
          color = props.color,
          colorBy = props.colorBy;

      if (pointSize && (!previous || pointSize !== previous.pointSize)) {
        this.actor.getProperty().setPointSize(pointSize);
      }

      if (color && (!previous || color !== previous.color)) {
        this.actor.getProperty().setColor(color);
      }

      if (colorBy && (!previous || colorBy !== previous.colorBy)) {
        this.setColorBy.apply(this, _toConsumableArray(colorBy));
      }
    }
  }, {
    key: "setColorBy",
    value: function setColorBy(arrayLocation, arrayName) {
      var colorMode = vtk_js_Sources_Rendering_Core_Mapper__WEBPACK_IMPORTED_MODULE_4__["default"].ColorMode.DEFAULT;
      var scalarMode = vtk_js_Sources_Rendering_Core_Mapper__WEBPACK_IMPORTED_MODULE_4__["default"].ScalarMode.DEFAULT;
      var colorByArrayName = arrayName;
      var dataset = this.mapper.getInputData();

      if (!dataset) {
        console.log('No mapper input');
        return;
      }

      var fields = dataset.getReferenceByName(arrayLocation);
      var activeArray = fields && fields.getArray(arrayName);
      var scalarVisibility = !!activeArray;

      if (scalarVisibility) {
        colorMode = vtk_js_Sources_Rendering_Core_Mapper__WEBPACK_IMPORTED_MODULE_4__["default"].ColorMode.MAP_SCALARS;
        scalarMode = arrayLocation === 'pointData' ? vtk_js_Sources_Rendering_Core_Mapper__WEBPACK_IMPORTED_MODULE_4__["default"].ScalarMode.USE_POINT_FIELD_DATA : vtk_js_Sources_Rendering_Core_Mapper__WEBPACK_IMPORTED_MODULE_4__["default"].ScalarMode.USE_CELL_FIELD_DATA;
      } // Not all mappers have those fields


      this.mapper.set({
        colorByArrayName: colorByArrayName,
        colorMode: colorMode,
        scalarMode: scalarMode,
        scalarVisibility: scalarVisibility
      }, true);
    }
  }]);

  return VtkGeometryRepresentation;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);


VtkGeometryRepresentation.defaultProps = {
  colorBy: ['pointData', ''],
  pointSize: 1,
  color: [1, 1, 1]
};
VtkGeometryRepresentation.propTypes = {
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
   * Choose which array to color the output with.
   * - ['pointData', 'temperature']
   * - ['cellData', 'pressure']
   */
  colorBy: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string),

  /**
   * pointSize for vertex rendering
   */
  pointSize: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * When no colorBy array is provided use provided solid color
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number),

  /**
   * List of representation to show
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node), prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node])
};

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoX3Z0ay8uL3NyYy9saWIvY29tcG9uZW50cy9WdGtHZW9tZXRyeVJlcHJlc2VudGF0aW9uLnJlYWN0LmpzIl0sIm5hbWVzIjpbIlZ0a0dlb21ldHJ5UmVwcmVzZW50YXRpb24iLCJwcm9wcyIsImFjdG9yIiwidnRrQWN0b3IiLCJuZXdJbnN0YW5jZSIsIm1hcHBlciIsInZ0a01hcHBlciIsInNldE1hcHBlciIsInZpZXciLCJyZW5kZXJlciIsImFkZEFjdG9yIiwiaWQiLCJjaGlsZHJlbiIsInVwZGF0ZSIsInByZXZQcm9wcyIsInByZXZTdGF0ZSIsInNuYXBzaG90IiwicmVtb3RlQWN0b3IiLCJwcmV2aW91cyIsInBvaW50U2l6ZSIsImNvbG9yIiwiY29sb3JCeSIsImdldFByb3BlcnR5Iiwic2V0UG9pbnRTaXplIiwic2V0Q29sb3IiLCJzZXRDb2xvckJ5IiwiYXJyYXlMb2NhdGlvbiIsImFycmF5TmFtZSIsImNvbG9yTW9kZSIsIkNvbG9yTW9kZSIsIkRFRkFVTFQiLCJzY2FsYXJNb2RlIiwiU2NhbGFyTW9kZSIsImNvbG9yQnlBcnJheU5hbWUiLCJkYXRhc2V0IiwiZ2V0SW5wdXREYXRhIiwiY29uc29sZSIsImxvZyIsImZpZWxkcyIsImdldFJlZmVyZW5jZUJ5TmFtZSIsImFjdGl2ZUFycmF5IiwiZ2V0QXJyYXkiLCJzY2FsYXJWaXNpYmlsaXR5IiwiTUFQX1NDQUxBUlMiLCJVU0VfUE9JTlRfRklFTERfREFUQSIsIlVTRV9DRUxMX0ZJRUxEX0RBVEEiLCJzZXQiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJzZXRQcm9wcyIsImZ1bmMiLCJhcnJheU9mIiwibnVtYmVyIiwib25lT2ZUeXBlIiwibm9kZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFFQTtB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QTtBQUNBO0FBQ0VDLFVBQVEsRUFBRUYsaURBQVMsQ0FBQ0csSUFWZ0I7QUFZcEM7O0FBRUE7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNFaEMsU0FBTyxFQUFFNkIsaURBQVMsQ0FBQ0ksT0FBVixDQUFrQkosaURBQVMsQ0FBQ0MsTUFBNUIsQ0FuQjJCOztBQXFCcEM7QUFDRjtBQUNBO0FBQ0VoQyxXQUFTLEVBQUUrQixpREFBUyxDQUFDSyxNQXhCZTs7QUEwQnBDO0FBQ0Y7QUFDQTtBQUNFbkMsT0FBSyxFQUFFOEIsaURBQVMsQ0FBQ0ksT0FBVixDQUFrQkosaURBQVMsQ0FBQ0ssTUFBNUIsQ0E3QjZCOztBQStCcEM7QUFDRjtBQUNBO0FBQ0UzQyxVQUFRLEVBQUVzQyxpREFBUyxDQUFDTSxTQUFWLENBQW9CLENBQzVCTixpREFBUyxDQUFDSSxPQUFWLENBQWtCSixpREFBUyxDQUFDTyxJQUE1QixDQUQ0QixFQUU1QlAsaURBQVMsQ0FBQ08sSUFGa0IsQ0FBcEI7QUFsQzBCLENBQXRDLEMiLCJmaWxlIjoiMWNkMzM2NS1tYWluLXdwcy1obXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHsgVnVlQ29udGV4dCwgUmVwcmVzZW50YXRpb25Db250ZXh0LCBEb3duc3RyZWFtQ29udGV4dCB9IGZyb20gJy4vVnRrVmlldy5yZWFjdCc7XG5cbmltcG9ydCB2dGtBY3RvciBmcm9tICd2dGsuanMvU291cmNlcy9SZW5kZXJpbmcvQ29yZS9BY3Rvcic7XG5pbXBvcnQgdnRrTWFwcGVyIGZyb20gJ3Z0ay5qcy9Tb3VyY2VzL1JlbmRlcmluZy9Db3JlL01hcHBlcic7XG5cbi8qKlxuICogVnRrR2VvbWV0cnlSZXByZXNlbnRhdGlvbiBpcyByZXNwb25zaWJsZSB0byBjb252ZXJ0IGEgdnRrUG9seURhdGEgaW50byByZW5kZXJpbmdcbiAqIEl0IHRha2VzIHRoZSBmb2xsb3dpbmcgc2V0IG9mIHByb3BlcnRpZXM6XG4gKiAgIC0gY29sb3JCeTogWydQT0lOVFMnLCAnJ10sXG4gKiAgIC0gcG9pbnRTaXplOiAxLFxuICogICAtIGNvbG9yOiBbMSwxLDFdLFxuICogSXQgcHJvdmlkZXMgdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzIHRvIGl0cyBjaGlsZHJlbjpcbiAqICAgLSAncmVwcmVzZW50YXRpb25gOiB0aGlzXG4gKiAgIC0gYGRvd25zdHJlYW1gID09IGBtYXBwZXJgIHdoaWNoIHNob3VsZCBiZSB1c2VkIHRvIGNhbGwgc2V0SW5wdXRDb25uZWN0aW9uL3NldElucHV0RGF0YVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWdGtHZW9tZXRyeVJlcHJlc2VudGF0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAvLyBDcmVhdGUgdnRrLmpzIGFjdG9yL21hcHBlclxuICAgIHRoaXMuYWN0b3IgPSB2dGtBY3Rvci5uZXdJbnN0YW5jZSgpO1xuICAgIHRoaXMubWFwcGVyID0gdnRrTWFwcGVyLm5ld0luc3RhbmNlKCk7XG4gICAgdGhpcy5hY3Rvci5zZXRNYXBwZXIodGhpcy5tYXBwZXIpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8VnVlQ29udGV4dC5Db25zdW1lcj5cbiAgICAgICAgeyh2aWV3KSA9PiB7XG4gICAgICAgICAgaWYgKCF0aGlzLnZpZXcpIHtcbiAgICAgICAgICAgIHZpZXcucmVuZGVyZXIuYWRkQWN0b3IodGhpcy5hY3Rvcik7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMudmlldyA9IHZpZXc7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxSZXByZXNlbnRhdGlvbkNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3RoaXN9PlxuICAgICAgICAgICAgICA8RG93bnN0cmVhbUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3RoaXMubWFwcGVyfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPXt0aGlzLnByb3BzLmlkfT5cbiAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L0Rvd25zdHJlYW1Db250ZXh0LlByb3ZpZGVyPlxuICAgICAgICAgICAgPC9SZXByZXNlbnRhdGlvbkNvbnRleHQuUHJvdmlkZXI+XG4gICAgICAgICAgKTtcbiAgICAgICAgfX1cbiAgICAgIDwvVnVlQ29udGV4dC5Db25zdW1lcj5cbiAgICApO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy51cGRhdGUodGhpcy5wcm9wcyk7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUsIHNuYXBzaG90KSB7XG4gICAgdGhpcy51cGRhdGUodGhpcy5wcm9wcywgcHJldlByb3BzKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGNvbnN0IHsgcmVuZGVyZXIgfSA9IHRoaXMudmlldztcbiAgICBpZiAocmVuZGVyZXIpIHtcbiAgICAgIHJlbmRlcmVyLnJlbW90ZUFjdG9yKHRoaXMuYWN0b3IpO1xuICAgIH1cblxuICAgIHRoaXMuYWN0b3IuZGVsZXRlKCk7XG4gICAgdGhpcy5hY3RvciA9IG51bGw7XG5cbiAgICB0aGlzLm1hcHBlci5kZWxldGUoKTtcbiAgICB0aGlzLm1hcHBlciA9IG51bGw7XG4gIH1cblxuICB1cGRhdGUocHJvcHMsIHByZXZpb3VzKSB7XG4gICAgY29uc3QgeyBwb2ludFNpemUsIGNvbG9yLCBjb2xvckJ5IH0gPSBwcm9wcztcbiAgICBpZiAocG9pbnRTaXplICYmICghcHJldmlvdXMgfHwgcG9pbnRTaXplICE9PSBwcmV2aW91cy5wb2ludFNpemUpKSB7XG4gICAgICB0aGlzLmFjdG9yLmdldFByb3BlcnR5KCkuc2V0UG9pbnRTaXplKHBvaW50U2l6ZSk7XG4gICAgfVxuICAgIGlmIChjb2xvciAmJiAoIXByZXZpb3VzIHx8IGNvbG9yICE9PSBwcmV2aW91cy5jb2xvcikpIHtcbiAgICAgIHRoaXMuYWN0b3IuZ2V0UHJvcGVydHkoKS5zZXRDb2xvcihjb2xvcik7XG4gICAgfVxuICAgIGlmIChjb2xvckJ5ICYmICghcHJldmlvdXMgfHwgY29sb3JCeSAhPT0gcHJldmlvdXMuY29sb3JCeSkpIHtcbiAgICAgIHRoaXMuc2V0Q29sb3JCeSguLi5jb2xvckJ5KVxuICAgIH1cbiAgfVxuXG4gIHNldENvbG9yQnkoYXJyYXlMb2NhdGlvbiwgYXJyYXlOYW1lKSB7XG4gICAgbGV0IGNvbG9yTW9kZSA9IHZ0a01hcHBlci5Db2xvck1vZGUuREVGQVVMVDtcbiAgICBsZXQgc2NhbGFyTW9kZSA9IHZ0a01hcHBlci5TY2FsYXJNb2RlLkRFRkFVTFQ7XG4gICAgY29uc3QgY29sb3JCeUFycmF5TmFtZSA9IGFycmF5TmFtZTtcbiAgICBjb25zdCBkYXRhc2V0ID0gdGhpcy5tYXBwZXIuZ2V0SW5wdXREYXRhKCk7XG4gICAgaWYgKCFkYXRhc2V0KSB7XG4gICAgICBjb25zb2xlLmxvZygnTm8gbWFwcGVyIGlucHV0Jyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGZpZWxkcyA9IGRhdGFzZXQuZ2V0UmVmZXJlbmNlQnlOYW1lKGFycmF5TG9jYXRpb24pO1xuICAgIGNvbnN0IGFjdGl2ZUFycmF5ID0gZmllbGRzICYmIGZpZWxkcy5nZXRBcnJheShhcnJheU5hbWUpO1xuICAgIGNvbnN0IHNjYWxhclZpc2liaWxpdHkgPSAhIWFjdGl2ZUFycmF5O1xuXG4gICAgaWYgKHNjYWxhclZpc2liaWxpdHkpIHtcbiAgICAgIGNvbG9yTW9kZSA9IHZ0a01hcHBlci5Db2xvck1vZGUuTUFQX1NDQUxBUlM7XG4gICAgICBzY2FsYXJNb2RlID1cbiAgICAgICAgYXJyYXlMb2NhdGlvbiA9PT0gJ3BvaW50RGF0YSdcbiAgICAgICAgICA/IHZ0a01hcHBlci5TY2FsYXJNb2RlLlVTRV9QT0lOVF9GSUVMRF9EQVRBXG4gICAgICAgICAgOiB2dGtNYXBwZXIuU2NhbGFyTW9kZS5VU0VfQ0VMTF9GSUVMRF9EQVRBO1xuICAgIH1cblxuICAgIC8vIE5vdCBhbGwgbWFwcGVycyBoYXZlIHRob3NlIGZpZWxkc1xuICAgIHRoaXMubWFwcGVyLnNldChcbiAgICAgIHtcbiAgICAgICAgY29sb3JCeUFycmF5TmFtZSxcbiAgICAgICAgY29sb3JNb2RlLFxuICAgICAgICBzY2FsYXJNb2RlLFxuICAgICAgICBzY2FsYXJWaXNpYmlsaXR5LFxuICAgICAgfSxcbiAgICAgIHRydWVcbiAgICApO1xuICB9O1xufVxuXG5WdGtHZW9tZXRyeVJlcHJlc2VudGF0aW9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgY29sb3JCeTogWydwb2ludERhdGEnLCAnJ10sXG4gIHBvaW50U2l6ZTogMSxcbiAgY29sb3I6IFsxLDEsMV0sXG59O1xuXG5WdGtHZW9tZXRyeVJlcHJlc2VudGF0aW9uLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIFRoZSBJRCB1c2VkIHRvIGlkZW50aWZ5IHRoaXMgY29tcG9uZW50IGluIERhc2ggY2FsbGJhY2tzLlxuICAgKi9cbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIERhc2gtYXNzaWduZWQgY2FsbGJhY2sgdGhhdCBzaG91bGQgYmUgY2FsbGVkIHRvIHJlcG9ydCBwcm9wZXJ0eSBjaGFuZ2VzXG4gICAqIHRvIERhc2gsIHRvIG1ha2UgdGhlbSBhdmFpbGFibGUgZm9yIGNhbGxiYWNrcy5cbiAgICovXG4gIHNldFByb3BzOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvLyAtLSB2dGsuanMgZXhwb3NlZCBwcm9wZXJ0aWVzXG5cbiAgLyoqXG4gICAqIENob29zZSB3aGljaCBhcnJheSB0byBjb2xvciB0aGUgb3V0cHV0IHdpdGguXG4gICAqIC0gWydwb2ludERhdGEnLCAndGVtcGVyYXR1cmUnXVxuICAgKiAtIFsnY2VsbERhdGEnLCAncHJlc3N1cmUnXVxuICAgKi9cbiAgY29sb3JCeTogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnN0cmluZyksXG5cbiAgLyoqXG4gICAqIHBvaW50U2l6ZSBmb3IgdmVydGV4IHJlbmRlcmluZ1xuICAgKi9cbiAgcG9pbnRTaXplOiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gIC8qKlxuICAgKiBXaGVuIG5vIGNvbG9yQnkgYXJyYXkgaXMgcHJvdmlkZWQgdXNlIHByb3ZpZGVkIHNvbGlkIGNvbG9yXG4gICAqL1xuICBjb2xvcjogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm51bWJlciksXG5cbiAgLyoqXG4gICAqIExpc3Qgb2YgcmVwcmVzZW50YXRpb24gdG8gc2hvd1xuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5ub2RlKSxcbiAgICBQcm9wVHlwZXMubm9kZVxuICBdKSxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9