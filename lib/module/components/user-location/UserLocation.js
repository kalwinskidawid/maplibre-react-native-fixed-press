"use strict";

import { memo, useMemo } from "react";
import { UserLocationPuck } from "./UserLocationPuck.js";
import { useCurrentPosition } from "../../hooks/useCurrentPosition.js";
import { Annotation } from "../annotations/Annotation.js";
import { jsx as _jsx } from "react/jsx-runtime";
export const UserLocation = /*#__PURE__*/memo(({
  animated = true,
  accuracy = false,
  heading = false,
  minDisplacement,
  children,
  onPress
}) => {
  const currentPosition = useCurrentPosition({
    minDisplacement
  });
  const coordinates = useMemo(() => {
    return currentPosition?.coords ? [currentPosition.coords.longitude, currentPosition.coords.latitude] : undefined;
  }, [currentPosition?.coords]);
  if (!coordinates || !currentPosition) {
    return null;
  }
  return /*#__PURE__*/_jsx(Annotation, {
    animated: animated,
    id: "mlrn-user-location",
    testID: "mlrn-user-location",
    onPress: onPress,
    coordinates: coordinates,
    style: {
      iconRotate: currentPosition.coords.heading ?? undefined
    },
    children: children || /*#__PURE__*/_jsx(UserLocationPuck, {
      testID: "mlrn-user-location-puck",
      sourceID: "mlrn-user-location",
      accuracy: accuracy ? currentPosition.coords.accuracy : undefined,
      heading: heading ? currentPosition.coords.heading ?? undefined : undefined
    })
  });
});
//# sourceMappingURL=UserLocation.js.map