import { type ReactNode } from "react";
import { type NativeSyntheticEvent } from "react-native";
import type { BaseProps } from "../../types/BaseProps";
import { type SymbolLayerStyle } from "../../types/MapLibreRNStyles";
import { type PressEventWithFeatures } from "../../types/PressEvent";
interface AnnotationProps extends BaseProps {
    id: string;
    animated?: boolean;
    animationDuration?: number;
    animationEasingFunction?: (x: number) => number;
    coordinates?: number[];
    onPress?: (event: NativeSyntheticEvent<PressEventWithFeatures>) => void;
    children?: ReactNode;
    style?: SymbolLayerStyle;
    icon?: string | number | object;
}
interface AnnotationRef {
    symbolStyle: SymbolLayerStyle | undefined;
}
export declare const Annotation: import("react").ForwardRefExoticComponent<AnnotationProps & import("react").RefAttributes<AnnotationRef>>;
export {};
//# sourceMappingURL=Annotation.d.ts.map