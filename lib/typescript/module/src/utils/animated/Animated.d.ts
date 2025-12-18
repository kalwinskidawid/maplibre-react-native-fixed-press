import { Animated as RNAnimated } from "react-native";
import { AnimatedCoordinatesArray } from "./AnimatedCoordinatesArray";
import { AnimatedExtractCoordinateFromArray } from "./AnimatedExtractCoordinateFromArray";
import { AnimatedRouteCoordinatesArray } from "./AnimatedRouteCoordinatesArray";
import { AnimatedShape } from "./AnimatedShape";
export declare const Animated: {
    ShapeSource: RNAnimated.AnimatedComponent<import("react").NamedExoticComponent<import("../../components/sources/ShapeSource").ShapeSourceProps & import("react").RefAttributes<import("../..").ShapeSourceRef>>>;
    ImageSource: RNAnimated.AnimatedComponent<(props: import("../../components/sources/ImageSource").ImageSourceProps) => import("react/jsx-runtime").JSX.Element | null>;
    FillLayer: RNAnimated.AnimatedComponent<({ sourceID, ...props }: import("../../components/layers/FillLayer").FillLayerProps) => import("react/jsx-runtime").JSX.Element>;
    FillExtrusionLayer: RNAnimated.AnimatedComponent<({ sourceID, ...props }: import("../../components/layers/FillExtrusionLayer").FillExtrusionLayerProps) => import("react/jsx-runtime").JSX.Element>;
    LineLayer: RNAnimated.AnimatedComponent<({ sourceID, ...props }: import("../../components/layers/LineLayer").LineLayerProps) => import("react/jsx-runtime").JSX.Element>;
    CircleLayer: RNAnimated.AnimatedComponent<({ sourceID, ...props }: import("../../components/layers/CircleLayer").CircleLayerProps) => import("react/jsx-runtime").JSX.Element>;
    SymbolLayer: RNAnimated.AnimatedComponent<({ sourceID, ...props }: import("../../components/layers/SymbolLayer").SymbolLayerProps) => import("react/jsx-runtime").JSX.Element>;
    RasterLayer: RNAnimated.AnimatedComponent<({ sourceID, ...props }: import("../../components/layers/RasterLayer").RasterLayerProps) => import("react/jsx-runtime").JSX.Element>;
    BackgroundLayer: RNAnimated.AnimatedComponent<({ sourceID, ...props }: import("../../components/layers/BackgroundLayer").BackgroundLayerProps) => import("react/jsx-runtime").JSX.Element>;
    CoordinatesArray: typeof AnimatedCoordinatesArray;
    RouteCoordinatesArray: typeof AnimatedRouteCoordinatesArray;
    Shape: typeof AnimatedShape;
    ExtractCoordinateFromArray: typeof AnimatedExtractCoordinateFromArray;
};
//# sourceMappingURL=Animated.d.ts.map