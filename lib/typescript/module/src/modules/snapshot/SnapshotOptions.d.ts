import type { SnapshotJsonOptions } from "./NativeSnapshotModule";
export interface SnapshotInputOptions extends Partial<Omit<SnapshotJsonOptions, "centerCoordinate" | "bounds">> {
    centerCoordinate?: GeoJSON.Position;
    bounds?: GeoJSON.Position[];
}
export declare class SnapshotOptions implements SnapshotJsonOptions {
    centerCoordinate?: string;
    bounds?: string;
    styleURL: string;
    heading: number;
    pitch: number;
    zoomLevel: number;
    width: number;
    height: number;
    writeToDisk: boolean;
    withLogo: boolean;
    constructor(options: SnapshotInputOptions);
    toJSON(): SnapshotJsonOptions;
    private stringifyCenterCoordinate;
    private stringifyBounds;
}
//# sourceMappingURL=SnapshotOptions.d.ts.map