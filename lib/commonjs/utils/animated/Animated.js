"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Animated = void 0;
var _reactNative = require("react-native");
var _AnimatedCoordinatesArray = require("./AnimatedCoordinatesArray.js");
var _AnimatedExtractCoordinateFromArray = require("./AnimatedExtractCoordinateFromArray.js");
var _AnimatedRouteCoordinatesArray = require("./AnimatedRouteCoordinatesArray.js");
var _AnimatedShape = require("./AnimatedShape.js");
var _BackgroundLayer = require("../../components/layers/BackgroundLayer.js");
var _CircleLayer = require("../../components/layers/CircleLayer.js");
var _FillExtrusionLayer = require("../../components/layers/FillExtrusionLayer.js");
var _FillLayer = require("../../components/layers/FillLayer.js");
var _LineLayer = require("../../components/layers/LineLayer.js");
var _RasterLayer = require("../../components/layers/RasterLayer.js");
var _SymbolLayer = require("../../components/layers/SymbolLayer.js");
var _ImageSource = require("../../components/sources/ImageSource.js");
var _ShapeSource = require("../../components/sources/ShapeSource.js");
const Animated = exports.Animated = {
  // sources
  ShapeSource: _reactNative.Animated.createAnimatedComponent(_ShapeSource.ShapeSource),
  ImageSource: _reactNative.Animated.createAnimatedComponent(_ImageSource.ImageSource),
  // layers
  FillLayer: _reactNative.Animated.createAnimatedComponent(_FillLayer.FillLayer),
  FillExtrusionLayer: _reactNative.Animated.createAnimatedComponent(_FillExtrusionLayer.FillExtrusionLayer),
  LineLayer: _reactNative.Animated.createAnimatedComponent(_LineLayer.LineLayer),
  CircleLayer: _reactNative.Animated.createAnimatedComponent(_CircleLayer.CircleLayer),
  SymbolLayer: _reactNative.Animated.createAnimatedComponent(_SymbolLayer.SymbolLayer),
  RasterLayer: _reactNative.Animated.createAnimatedComponent(_RasterLayer.RasterLayer),
  BackgroundLayer: _reactNative.Animated.createAnimatedComponent(_BackgroundLayer.BackgroundLayer),
  // values
  CoordinatesArray: _AnimatedCoordinatesArray.AnimatedCoordinatesArray,
  RouteCoordinatesArray: _AnimatedRouteCoordinatesArray.AnimatedRouteCoordinatesArray,
  Shape: _AnimatedShape.AnimatedShape,
  ExtractCoordinateFromArray: _AnimatedExtractCoordinateFromArray.AnimatedExtractCoordinateFromArray
};
//# sourceMappingURL=Animated.js.map