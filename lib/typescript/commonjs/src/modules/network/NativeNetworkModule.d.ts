import type { TurboModule } from "react-native";
export interface Spec extends TurboModule {
    addRequestHeader(name: string, value: string, match: string | null): void;
    removeRequestHeader(name: string): void;
    setConnected(connected: boolean): void;
}
declare const _default: Spec;
export default _default;
//# sourceMappingURL=NativeNetworkModule.d.ts.map