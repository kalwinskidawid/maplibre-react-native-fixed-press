"use strict";

import { forwardRef, memo, useImperativeHandle, useLayoutEffect, useMemo, useRef, useState } from "react";
import { findNodeHandle as rnFindNodeHandle, NativeModules, requireNativeComponent, StyleSheet, View } from "react-native";
import MapViewNativeComponent from "./MapViewNativeComponent";
import NativeMapViewModule from "./NativeMapViewModule.js";
import { LogManager } from "../../modules/log/LogManager.js";
import { isAndroid } from "../../utils/index.js";
import { transformStyle } from "../../utils/StyleValue.js";
import { getFilter } from "../../utils/filterUtils.js";
import { jsx as _jsx } from "react/jsx-runtime";
const MLRNModule = NativeModules.MLRNModule;
if (MLRNModule == null) {
  console.error("Native module of @maplibre/maplibre-react-native library was not registered properly, please consult the docs: https://github.com/maplibre/maplibre-react-native");
}
const NativeAndroidTextureMapViewComponent = isAndroid() ? requireNativeComponent("MLRNAndroidTextureMapView") : undefined;
const styles = StyleSheet.create({
  flex1: {
    flex: 1
  }
});
const findNodeHandle = ref => {
  const nodeHandle = rnFindNodeHandle(ref);
  if (!nodeHandle) {
    throw new Error("MapViewNativeComponent ref is null, wait for the map being initialized");
  }
  return nodeHandle;
};
/**
 * MapLibre Native MapView
 */
export const MapView = /*#__PURE__*/memo(/*#__PURE__*/forwardRef(({
  androidView = "surface",
  style,
  ...props
}, ref) => {
  const [isReady, setIsReady] = useState(false);
  const nativeRef = useRef(null);
  useImperativeHandle(ref, () => ({
    getCenter: () => NativeMapViewModule.getCenter(findNodeHandle(nativeRef.current)),
    getZoom: () => NativeMapViewModule.getZoom(findNodeHandle(nativeRef.current)),
    getBearing: () => NativeMapViewModule.getBearing(findNodeHandle(nativeRef.current)),
    getPitch: () => NativeMapViewModule.getPitch(findNodeHandle(nativeRef.current)),
    getBounds: () => NativeMapViewModule.getBounds(findNodeHandle(nativeRef.current)),
    getViewState: () => NativeMapViewModule.getViewState(findNodeHandle(nativeRef.current)),
    project: lngLat => NativeMapViewModule.project(findNodeHandle(nativeRef.current), lngLat),
    unproject: point => NativeMapViewModule.unproject(findNodeHandle(nativeRef.current), point),
    queryRenderedFeatures: async (pixelPointOrPixelPointBoundsOrOptions, options) => {
      if (pixelPointOrPixelPointBoundsOrOptions && Array.isArray(pixelPointOrPixelPointBoundsOrOptions) && (value => typeof value[0] === "number" && typeof value[1] === "number")(pixelPointOrPixelPointBoundsOrOptions)) {
        return await NativeMapViewModule.queryRenderedFeaturesWithPoint(findNodeHandle(nativeRef.current), pixelPointOrPixelPointBoundsOrOptions, options?.layers ?? [], getFilter(options?.filter));
      } else if (pixelPointOrPixelPointBoundsOrOptions && Array.isArray(pixelPointOrPixelPointBoundsOrOptions) && (value => Array.isArray(value[0]) && Array.isArray(value[1]))(pixelPointOrPixelPointBoundsOrOptions)) {
        return await NativeMapViewModule.queryRenderedFeaturesWithBounds(findNodeHandle(nativeRef.current), pixelPointOrPixelPointBoundsOrOptions, options?.layers ?? [], getFilter(options?.filter));
      } else {
        return await NativeMapViewModule.queryRenderedFeaturesWithBounds(findNodeHandle(nativeRef.current), null, pixelPointOrPixelPointBoundsOrOptions?.layers ?? [], getFilter(pixelPointOrPixelPointBoundsOrOptions?.filter));
      }
    },
    takeSnap: (writeToDisk = false) => NativeMapViewModule.takeSnap(findNodeHandle(nativeRef.current), writeToDisk),
    setSourceVisibility: (visible, source, sourceLayer) => NativeMapViewModule.setSourceVisibility(findNodeHandle(nativeRef.current), visible, source, sourceLayer ?? null),
    showAttribution: () => NativeMapViewModule.showAttribution(findNodeHandle(nativeRef.current))
  }));

  // Start before rendering
  useLayoutEffect(() => {
    LogManager.start();
    return () => {
      LogManager.stop();
    };
  }, []);
  const nativeProps = useMemo(() => {
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
    const transformedLight = props.light ? transformStyle(props.light) : undefined;
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
      mapView = /*#__PURE__*/_jsx(NativeAndroidTextureMapViewComponent, {
        ...nativeProps
      });
    } else {
      mapView = /*#__PURE__*/_jsx(MapViewNativeComponent, {
        ...nativeProps
      });
    }
  }
  return /*#__PURE__*/_jsx(View, {
    onLayout: () => setIsReady(true),
    style: style ?? styles.flex1,
    testID: nativeProps.testID ? `${nativeProps.testID}View` : undefined,
    children: mapView
  });
}));
//# sourceMappingURL=MapView.js.map