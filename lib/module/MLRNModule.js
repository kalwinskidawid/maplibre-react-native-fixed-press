"use strict";

import { NativeModules } from "react-native";
const MLRNModule = Object.create(NativeModules.MLRNModule);
export const {
  OfflinePackDownloadState,
  StyleSource,
  StyleURL,
  addCustomHeader,
  removeCustomHeader,
  setConnected
} = MLRNModule;
//# sourceMappingURL=MLRNModule.js.map