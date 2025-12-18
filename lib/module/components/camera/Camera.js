"use strict";

import { forwardRef, memo, useImperativeHandle, useRef } from "react";
import { findNodeHandle } from "react-native";
import NativeCameraComponent from "./CameraNativeComponent";
import NativeCameraModule from "./NativeCameraModule.js";
import { jsx as _jsx } from "react/jsx-runtime";
export const Camera = /*#__PURE__*/memo(/*#__PURE__*/forwardRef(({
  testID,
  initialViewState,
  minZoom,
  maxZoom,
  maxBounds,
  trackUserLocation,
  onTrackUserLocationChange,
  ...stop
}, ref) => {
  const nativeRef = useRef(null);
  const setStop = stop => {
    const nodeHandle = findNodeHandle(nativeRef.current);
    if (!nodeHandle) {
      throw new Error("NativeCameraComponent ref is null, wait for the map being initialized");
    }
    return NativeCameraModule.setStop(nodeHandle, stop);
  };
  useImperativeHandle(ref, () => ({
    setStop,
    jumpTo: ({
      center,
      ...options
    }) => setStop({
      ...options,
      center,
      duration: 0,
      easing: undefined
    }),
    easeTo: ({
      center,
      duration = 500,
      easing = "ease",
      ...options
    }) => setStop({
      ...options,
      center,
      duration,
      easing
    }),
    flyTo: ({
      center,
      duration = 2000,
      easing = "fly",
      ...options
    }) => setStop({
      ...options,
      center,
      duration,
      easing
    }),
    fitBounds: (bounds, {
      duration = 2000,
      easing = "fly",
      ...options
    } = {}) => setStop({
      ...options,
      bounds,
      duration,
      easing
    }),
    zoomTo: (zoom, {
      duration = 500,
      easing = "ease",
      ...options
    } = {}) => setStop({
      ...options,
      zoom,
      duration,
      easing
    })
  }));
  return /*#__PURE__*/_jsx(NativeCameraComponent, {
    ref: nativeRef,
    testID: testID,
    stop: stop,
    initialViewState: initialViewState,
    minZoom: minZoom,
    maxZoom: maxZoom,
    maxBounds: maxBounds,
    trackUserLocation: trackUserLocation,
    onTrackUserLocationChange: onTrackUserLocationChange
  });
}));
//# sourceMappingURL=Camera.js.map