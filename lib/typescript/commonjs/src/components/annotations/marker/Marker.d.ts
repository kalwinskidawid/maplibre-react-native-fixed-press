import { type ReactElement } from "react";
import { type ViewProps } from "react-native";
import { type Anchor } from "../../../types/Anchor";
import type { LngLat } from "../../../types/LngLat";
import type { PixelPoint } from "../../../types/PixelPoint";
export interface MarkerProps extends ViewProps {
    /**
     * A string that uniquely identifies the marker.
     */
    id?: string;
    /**
     * The center point (specified as a map coordinate) of the marker.
     * See also #anchor.
     */
    lngLat: LngLat;
    /**
     * Specifies the anchor being set on a particular point of the annotation.
     * The anchor indicates which part of the marker should be placed closest to the coordinate.
     * Defaults to "center".
     *
     * @see https://maplibre.org/maplibre-gl-js/docs/API/type-aliases/PositionAnchor/
     */
    anchor?: Anchor;
    /**
     * The offset in pixels to apply relative to the anchor.
     * Negative values indicate left and up.
     *
     * @see https://maplibre.org/maplibre-gl-js/docs/API/type-aliases/MarkerOptions/#offset
     */
    offset?: PixelPoint;
    /**
     * Manually selects/deselects the marker.
     *
     * @platform iOS
     */
    selected?: boolean;
    /**
     * Expects one child - can be container with multiple elements
     */
    children: ReactElement;
}
/**
 * Marker allows you to place an interactive React Native View on the map.
 *
 * If you have static view consider using ViewAnnotation or SymbolLayer for better performance.
 *
 * Implemented through:
 * - Android: Native Views placed on the map projection
 * - iOS: [MLNPointAnnotation](https://maplibre.org/maplibre-native/ios/latest/documentation/maplibre/mlnpointannotation/)
 */
export declare const Marker: ({ id, anchor, offset, ...props }: MarkerProps) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Marker.d.ts.map