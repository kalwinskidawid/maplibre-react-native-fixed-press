"use strict";

import { memo } from "react";
import { UserLocationPuckHeading } from "./UserLocationPuckHeading.js";
import { CircleLayer } from "../layers/CircleLayer.js";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
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
export const UserLocationPuck = /*#__PURE__*/memo(({
  sourceID,
  accuracy,
  heading
}) => {
  return /*#__PURE__*/_jsxs(_Fragment, {
    children: [typeof accuracy === "number" && /*#__PURE__*/_jsx(CircleLayer, {
      id: "mlrn-user-location-puck-accuracy",
      testID: "mlrn-user-location-puck-accuracy",
      sourceID: sourceID,
      style: {
        ...layerStyles.accuracy,
        circleRadius: ["interpolate", ["exponential", 2], ["zoom"], 0, layerStyles.white.circleRadius, 22, layerStyles.white.circleRadius + accuracy * 100]
      }
    }), /*#__PURE__*/_jsx(CircleLayer, {
      id: "mlrn-user-location-puck-white",
      testID: "mlrn-user-location-puck-white",
      sourceID: sourceID,
      style: layerStyles.white
    }), /*#__PURE__*/_jsx(CircleLayer, {
      id: "mlrn-user-location-puck-blue",
      testID: "mlrn-user-location-puck-blue",
      sourceID: sourceID,
      style: layerStyles.blue
    }), typeof heading === "number" && /*#__PURE__*/_jsx(UserLocationPuckHeading, {
      sourceID: sourceID,
      belowLayerID: "mlrn-user-location-puck-white",
      heading: heading
    })]
  });
});
//# sourceMappingURL=UserLocationPuck.js.map