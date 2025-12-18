"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MapView = void 0;
var _react = require("react");
var _reactNative = require("react-native");
var _MapViewNativeComponent = _interopRequireDefault(require("./MapViewNativeComponent"));
var _NativeMapViewModule = _interopRequireDefault(require("./NativeMapViewModule.js"));
var _LogManager = require("../../modules/log/LogManager.js");
var _index = require("../../utils/index.js");
var _StyleValue = require("../../utils/StyleValue.js");
var _filterUtils = require("../../utils/filterUtils.js");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const MLRNModule = _reactNative.NativeModules.MLRNModule;
if (MLRNModule == null) {
  console.error("Native module of @maplibre/maplibre-react-native library was not registered properly, please consult the docs: https://github.com/maplibre/maplibre-react-native");
}
const NativeAndroidTextureMapViewComponent = (0, _index.isAndroid)() ? (0, _reactNative.requireNativeComponent)("MLRNAndroidTextureMapView") : undefined;
const styles = _reactNative.StyleSheet.create({
  flex1: {
    flex: 1
  }
});
const findNodeHandle = ref => {
  const nodeHandle = (0, _reactNative.findNodeHandle)(ref);
  if (!nodeHandle) {
    throw new Error("MapViewNativeComponent ref is null, wait for the map being initialized");
  }
  return nodeHandle;
};
/**
 * MapLibre Native MapView
 */
const MapView = exports.MapView = /*#__PURE__*/(0, _react.memo)(/*#__PURE__*/(0, _react.forwardRef)(({
  androidView = "surface",
  style,
  ...props
}, ref) => {
  const [isReady, setIsReady] = (0, _react.useState)(false);
  const nativeRef = (0, _react.useRef)(null);
  (0, _react.useImperativeHandle)(ref, () => ({
    getCenter: () => _NativeMapViewModule.default.getCenter(findNodeHandle(nativeRef.current)),
    getZoom: () => _NativeMapViewModule.default.getZoom(findNodeHandle(nativeRef.current)),
    getBearing: () => _NativeMapViewModule.default.getBearing(findNodeHandle(nativeRef.current)),
    getPitch: () => _NativeMapViewModule.default.getPitch(findNodeHandle(nativeRef.current)),
    getBounds: () => _NativeMapViewModule.default.getBounds(findNodeHandle(nativeRef.current)),
    getViewState: () => _NativeMapViewModule.default.getViewState(findNodeHandle(nativeRef.current)),
    project: lngLat => _NativeMapViewModule.default.project(findNodeHandle(nativeRef.current), lngLat),
    unproject: point => _NativeMapViewModule.default.unproject(findNodeHandle(nativeRef.current), point),
    queryRenderedFeatures: async (pixelPointOrPixelPointBoundsOrOptions, options) => {
      if (pixelPointOrPixelPointBoundsOrOptions && Array.isArray(pixelPointOrPixelPointBoundsOrOptions) && (value => typeof value[0] === "number" && typeof value[1] === "number")(pixelPointOrPixelPointBoundsOrOptions)) {
        return await _NativeMapViewModule.default.queryRenderedFeaturesWithPoint(findNodeHandle(nativeRef.current), pixelPointOrPixelPointBoundsOrOptions, options?.layers ?? [], (0, _filterUtils.getFilter)(options?.filter));
      } else if (pixelPointOrPixelPointBoundsOrOptions && Array.isArray(pixelPointOrPixelPointBoundsOrOptions) && (value => Array.isArray(value[0]) && Array.isArray(value[1]))(pixelPointOrPixelPointBoundsOrOptions)) {
        return await _NativeMapViewModule.default.queryRenderedFeaturesWithBounds(findNodeHandle(nativeRef.current), pixelPointOrPixelPointBoundsOrOptions, options?.layers ?? [], (0, _filterUtils.getFilter)(options?.filter));
      } else {
        return await _NativeMapViewModule.default.queryRenderedFeaturesWithBounds(findNodeHandle(nativeRef.current), null, pixelPointOrPixelPointBoundsOrOptions?.layers ?? [], (0, _filterUtils.getFilter)(pixelPointOrPixelPointBoundsOrOptions?.filter));
      }
    },
    takeSnap: (writeToDisk = false) => _NativeMapViewModule.default.takeSnap(findNodeHandle(nativeRef.current), writeToDisk),
    setSourceVisibility: (visible, source, sourceLayer) => _NativeMapViewModule.default.setSourceVisibility(findNodeHandle(nativeRef.current), visible, source, sourceLayer ?? null),
    showAttribution: () => _NativeMapViewModule.default.showAttribution(findNodeHandle(nativeRef.current))
  }));

  // Start before rendering
  (0, _react.useLayoutEffect)(() => {
    _LogManager.LogManager.start();
    return () => {
      _LogManager.LogManager.stop();
    };
  }, []);
  const nativeProps = (0, _react.useMemo)(() => {
    const {
      mapStyle,
      light,
      ...otherProps
    } = props;
    let nativeMapStyle = undefined;
    if (mapStyle) {
      if (typeof mapStyle === "string") {
        nativeMapStyle = mapStyle;
      } else if (typeof mapStyle === "object") {
        nativeMapStyle = JSON.stringify(mapStyle);
      }
    }
    const transformedLight = props.light ? (0, _StyleValue.transformStyle)(props.light) : undefined;
    return {
      ...otherProps,
      ref: nativeRef,
      style: styles.flex1,
      mapStyle: nativeMapStyle,
      light: transformedLight
    };
  }, [props]);
  let mapView = null;
  if (isReady) {
    if (NativeAndroidTextureMapViewComponent && androidView === "texture") {
      mapView = /*#__PURE__*/(0, _jsxRuntime.jsx)(NativeAndroidTextureMapViewComponent, {
        ...nativeProps
      });
    } else {
      mapView = /*#__PURE__*/(0, _jsxRuntime.jsx)(_MapViewNativeComponent.default, {
        ...nativeProps
      });
    }
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
    onLayout: () => setIsReady(true),
    style: style ?? styles.flex1,
    testID: nativeProps.testID ? `${nativeProps.testID}View` : undefined,
    children: mapView
  });
}));
//# sourceMappingURL=MapView.js.map