import { type GeolocationPosition } from "../modules/location/LocationManager";
interface UseCurrentPositionOptions {
    /**
     * Enable or disable position updates
     *
     * @default true
     */
    enabled?: boolean;
    /**
     * Minimum displacement in meters to trigger position update
     *
     * @default 0
     */
    minDisplacement?: number;
}
export declare function useCurrentPosition({ enabled, minDisplacement, }?: UseCurrentPositionOptions): GeolocationPosition | undefined;
export {};
//# sourceMappingURL=useCurrentPosition.d.ts.map