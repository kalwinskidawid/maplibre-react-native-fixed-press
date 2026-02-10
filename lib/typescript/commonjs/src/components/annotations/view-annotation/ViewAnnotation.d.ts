import { type ReactElement } from "react";
import { type NativeSyntheticEvent, type ViewProps } from "react-native";
import { type Anchor } from "../../../types/Anchor";
import type { LngLat } from "../../../types/LngLat";
import type { PixelPoint } from "../../../types/PixelPoint";
import type { PressEvent } from "../../../types/PressEvent";
export type ViewAnnotationEvent = PressEvent & {
    id: string;
};
export interface ViewAnnotationProps {
    /**
     * A string that uniquely identifies the annotation.
     * If not provided, a unique ID will be generated automatically.
     */
    id?: string;
    /**
     * The string containing the annotation's title. Note this is required to be set if you want to see a callout appear on iOS.
     */
    title?: string;
    /**
     * The string containing the annotation's snippet(subtitle). Not displayed in the default callout.
     */
    snippet?: string;
    /**
     * Manually selects/deselects annotation
     */
    selected?: boolean;
    /**
     * Enable or disable dragging. Defaults to false.
     */
    draggable?: boolean;
    /**
     * The center point (specified as a map coordinate) of the annotation.
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
     * This callback is fired once this annotation is selected.
     */
    onSelected?: (event: NativeSyntheticEvent<ViewAnnotationEvent>) => void;
    /**
     * This callback is fired once this annotation is deselected.
     */
    onDeselected?: (event: NativeSyntheticEvent<ViewAnnotationEvent>) => void;
    /**
     * This callback is fired once this annotation has started being dragged.
     */
    onDragStart?: (event: NativeSyntheticEvent<ViewAnnotationEvent>) => void;
    /**
     * This callback is fired once this annotation has stopped being dragged.
     */
    onDragEnd?: (event: NativeSyntheticEvent<ViewAnnotationEvent>) => void;
    /**
     * This callback is fired while this annotation is being dragged.
     */
    onDrag?: (event: NativeSyntheticEvent<ViewAnnotationEvent>) => void;
    /**
     * Expects one child, and an optional callout can be added as well
     */
    children: ReactElement | [ReactElement, ReactElement];
    style?: ViewProps["style"];
}
export interface ViewAnnotationRef {
    /**
     * On android point annotation is rendered offscreen with a canvas into an image.
     * To rerender the image from the current state of the view call refresh.
     * Call this for example from Image#onLoad.
     */
    refresh(): void;
}
/**
 * ViewAnnotation represents a one-dimensional shape located at a single geographical coordinate.
 *
 * Consider using GeoJSONSource and SymbolLayer instead, if you have many points, and you have static images,
 * they'll offer much better performance.
 *
 * If you need interactive views please use Marker,
 * as with ViewAnnotation on Android child views are rendered onto a bitmap for better performance.
 */
export declare const ViewAnnotation: import("react").ForwardRefExoticComponent<ViewAnnotationProps & import("react").RefAttributes<ViewAnnotationRef>>;
//# sourceMappingURL=ViewAnnotation.d.ts.map