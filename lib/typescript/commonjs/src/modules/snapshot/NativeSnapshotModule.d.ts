import type { TurboModule } from "react-native";
export interface SnapshotJsonOptions {
    centerCoordinate?: string;
    zoomLevel?: number;
    bounds?: string;
    styleURL: string;
    heading: number;
    pitch: number;
    width: number;
    height: number;
    writeToDisk: boolean;
    withLogo: boolean;
}
export interface Spec extends TurboModule {
    takeSnap(options: SnapshotJsonOptions): Promise<string>;
}
declare const _default: Spec;
export default _default;
//# sourceMappingURL=NativeSnapshotModule.d.ts.map