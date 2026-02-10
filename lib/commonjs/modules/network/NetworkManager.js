"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NetworkManager = void 0;
var _NativeNetworkModule = _interopRequireDefault(require("./NativeNetworkModule.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**
 * NetworkManager provides methods for managing HTTP requests made by MapLibre.
 * This includes adding custom headers to tile requests and controlling network connectivity.
 */
class NetworkManager {
  /**
   * Adds a custom HTTP header that will be sent with all map tile requests.
   * This is useful for adding authentication tokens or other custom headers
   * required by your tile server.
   *
   * @example
   * // Add header to all requests
   * NetworkManager.addRequestHeader("Authorization", "Bearer token123");
   *
   * // Add header only to requests matching a regex pattern (string)
   * NetworkManager.addRequestHeader("X-API-Key", "key123", "https:\\/\\/api\\.example\\.com\\/tiles\\/");
   *
   * // Add header only to requests matching a regex pattern (RegExp)
   * NetworkManager.addRequestHeader("X-API-Key", "key123", /https:\/\/api\.example\.com\/tiles\//);
   *
   * @param name The name of the header (e.g., "Authorization")
   * @param value The value of the header (e.g., "Bearer token123")
   * @param match Optional regex pattern to match against network URLs. If provided, the header will only be added to requests whose URLs match this pattern. Can be a RegExp object or a regex string.
   */
  static addRequestHeader(name, value, match) {
    _NativeNetworkModule.default.addRequestHeader(name, value, (match instanceof RegExp ? match.source : match) || null);
  }

  /**
   * Removes a previously added custom HTTP header.
   *
   * @example
   * ```ts
   * NetworkManager.removeRequestHeader("Authorization");
   * ```
   *
   * @param headerName The name of the header to remove
   */
  static removeRequestHeader(headerName) {
    _NativeNetworkModule.default.removeRequestHeader(headerName);
  }

  /**
   * Android only: Sets the connectivity state of the map. When set to false, the map will
   * not make any network requests and will only use cached tiles. This is
   * useful for implementing offline mode or reducing data usage.
   *
   * @example
   * ```ts
   * // Enable offline mode
   * NetworkManager.setConnected(false);
   *
   * // Re-enable network requests
   * NetworkManager.setConnected(true);
   * ```
   *
   * @param connected Whether the map should be connected to the network
   */
  static setConnected(connected) {
    _NativeNetworkModule.default.setConnected(connected);
  }
}
exports.NetworkManager = NetworkManager;
//# sourceMappingURL=NetworkManager.js.map