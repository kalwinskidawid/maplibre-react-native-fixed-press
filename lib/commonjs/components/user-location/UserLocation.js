"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserLocation = void 0;
var _react = require("react");
var _UserLocationPuck = require("./UserLocationPuck.js");
var _useCurrentPosition = require("../../hooks/useCurrentPosition.js");
var _Annotation = require("../annotations/Annotation.js");
var _jsxRuntime = require("react/jsx-runtime");
const UserLocation = exports.UserLocation = /*#__PURE__*/(0, _react.memo)(({
  animated = true,
  accuracy = false,
  heading = false,
  minDisplacement,
  children,
  onPress
}) => {
  const currentPosition = (0, _useCurrentPosition.useCurrentPosition)({
    minDisplacement
  });
  const coordinates = (0, _react.useMemo)(() => {
    return currentPosition?.coords ? [currentPosition.coords.longitude, currentPosition.coords.latitude] : undefined;
  }, [currentPosition?.coords]);
  if (!coordinates || !currentPosition) {
    return null;
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Annotation.Annotation, {
    animated: animated,
    id: "mlrn-user-location",
    testID: "mlrn-user-location",
    onPress: onPress,
    coordinates: coordinates,
    style: {
      iconRotate: currentPosition.coords.heading ?? undefined
    },
    children: children || /*#__PURE__*/(0, _jsxRuntime.jsx)(_UserLocationPuck.UserLocationPuck, {
      testID: "mlrn-user-location-puck",
      sourceID: "mlrn-user-location",
      accuracy: accuracy ? currentPosition.coords.accuracy : undefined,
      heading: heading ? currentPosition.coords.heading ?? undefined : undefined
    })
  });
});
//# sourceMappingURL=UserLocation.js.map