"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserLocationPuck = void 0;
var _react = require("react");
var _UserLocationPuckHeading = require("./UserLocationPuckHeading.js");
var _CircleLayer = require("../layers/CircleLayer.js");
var _jsxRuntime = require("react/jsx-runtime");
const blue = "#33B5E5";
const layerStyles = {
  accuracy: {
    circleColor: blue,
    circleOpacity: 0.2,
    circlePitchAlignment: "map",
    circleRadiusTransition: {
      duration: 300,
      delay: 0
    }
  },
  white: {
    circleRadius: 9,
    circleColor: "#fff",
    circlePitchAlignment: "map"
  },
  blue: {
    circleRadius: 6,
    circleColor: blue,
    circlePitchAlignment: "map"
  }
};
const UserLocationPuck = exports.UserLocationPuck = /*#__PURE__*/(0, _react.memo)(({
  sourceID,
  accuracy,
  heading
}) => {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [typeof accuracy === "number" && /*#__PURE__*/(0, _jsxRuntime.jsx)(_CircleLayer.CircleLayer, {
      id: "mlrn-user-location-puck-accuracy",
      testID: "mlrn-user-location-puck-accuracy",
      sourceID: sourceID,
      style: {
        ...layerStyles.accuracy,
        circleRadius: ["interpolate", ["exponential", 2], ["zoom"], 0, layerStyles.white.circleRadius, 22, layerStyles.white.circleRadius + accuracy * 100]
      }
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_CircleLayer.CircleLayer, {
      id: "mlrn-user-location-puck-white",
      testID: "mlrn-user-location-puck-white",
      sourceID: sourceID,
      style: layerStyles.white
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_CircleLayer.CircleLayer, {
      id: "mlrn-user-location-puck-blue",
      testID: "mlrn-user-location-puck-blue",
      sourceID: sourceID,
      style: layerStyles.blue
    }), typeof heading === "number" && /*#__PURE__*/(0, _jsxRuntime.jsx)(_UserLocationPuckHeading.UserLocationPuckHeading, {
      sourceID: sourceID,
      belowLayerID: "mlrn-user-location-puck-white",
      heading: heading
    })]
  });
});
//# sourceMappingURL=UserLocationPuck.js.map