"use strict";

import { memo } from "react";
import headingIcon from "../../assets/heading.png";
import { SymbolLayer } from "../layers/SymbolLayer.js";
import { jsx as _jsx } from "react/jsx-runtime";
const layerStyle = {
  iconImage: headingIcon,
  iconAllowOverlap: true,
  iconPitchAlignment: "map",
  iconRotationAlignment: "map"
};
export const UserLocationPuckHeading = /*#__PURE__*/memo(({
  sourceID,
  belowLayerID,
  heading
}) => /*#__PURE__*/_jsx(SymbolLayer, {
  id: "mlrn-user-location-puck-heading",
  testID: "mlrn-user-location-puck-heading",
  sourceID: sourceID,
  belowLayerID: belowLayerID,
  style: {
    ...layerStyle,
    iconRotate: heading
  }
}));
//# sourceMappingURL=UserLocationPuckHeading.js.map