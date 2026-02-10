"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ViewAnnotation = void 0;
var _react = require("react");
var _reactNative = require("react-native");
var _PointAnnotationNativeComponent = _interopRequireWildcard(require("./PointAnnotationNativeComponent"));
var _useFrozenId = require("../../../hooks/useFrozenId.js");
var _Anchor = require("../../../types/Anchor.js");
var _Callout = require("../callout/Callout.js");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
const styles = _reactNative.StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute"
  }
});
/**
 * ViewAnnotation represents a one-dimensional shape located at a single geographical coordinate.
 *
 * Consider using GeoJSONSource and SymbolLayer instead, if you have many points, and you have static images,
 * they'll offer much better performance.
 *
 * If you need interactive views please use Marker,
 * as with ViewAnnotation on Android child views are rendered onto a bitmap for better performance.
 */
const ViewAnnotation = exports.ViewAnnotation = /*#__PURE__*/(0, _react.forwardRef)(({
  id,
  anchor = "center",
  draggable = false,
  offset,
  ...props
}, ref) => {
  const frozenId = (0, _useFrozenId.useFrozenId)(id);
  const nativeAnchor = (0, _Anchor.anchorToNative)(anchor);
  const nativeOffset = offset ? {
    x: offset[0],
    y: offset[1]
  } : undefined;
  const nativeRef = (0, _react.useRef)(null);
  (0, _react.useImperativeHandle)(ref, () => ({
    refresh
  }));
  function refresh() {
    if (_reactNative.Platform.OS === "android" && nativeRef.current) {
      _PointAnnotationNativeComponent.Commands.refresh(nativeRef.current);
    }
  }

  // On Android, wrap children in a non-collapsable View to prevent Fabric
  // from flattening the view hierarchy. Without this, Fabric may flatten
  // intermediate Views, causing their backgrounds to disappear.
  // We need to keep Callout separate so native code can identify it.
  const wrappedChildren = (() => {
    if (_reactNative.Platform.OS !== "android") {
      return props.children;
    }

    // Separate Callout from other children so native can identify it
    const childArray = _react.Children.toArray(props.children);
    const callout = childArray.find(child => /*#__PURE__*/(0, _react.isValidElement)(child) && child.type === _Callout.Callout);
    const otherChildren = childArray.filter(child => ! /*#__PURE__*/(0, _react.isValidElement)(child) || child.type !== _Callout.Callout);
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
        collapsable: false,
        style: {
          overflow: "visible"
        },
        children: otherChildren
      }), callout]
    });
  })();
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_PointAnnotationNativeComponent.default, {
    ref: nativeRef,
    ...props,
    id: frozenId,
    anchor: nativeAnchor,
    offset: nativeOffset,
    draggable: draggable,
    style: [props.style, styles.container],
    children: wrappedChildren
  });
});
//# sourceMappingURL=ViewAnnotation.js.map