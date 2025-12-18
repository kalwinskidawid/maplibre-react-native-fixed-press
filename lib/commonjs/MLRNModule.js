"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setConnected = exports.removeCustomHeader = exports.addCustomHeader = exports.StyleURL = exports.StyleSource = exports.OfflinePackDownloadState = void 0;
var _reactNative = require("react-native");
const MLRNModule = Object.create(_reactNative.NativeModules.MLRNModule);
const {
  OfflinePackDownloadState,
  StyleSource,
  StyleURL,
  addCustomHeader,
  removeCustomHeader,
  setConnected
} = MLRNModule;
exports.setConnected = setConnected;
exports.removeCustomHeader = removeCustomHeader;
exports.addCustomHeader = addCustomHeader;
exports.StyleURL = StyleURL;
exports.StyleSource = StyleSource;
exports.OfflinePackDownloadState = OfflinePackDownloadState;
//# sourceMappingURL=MLRNModule.js.map