"use strict";

import { Animated as RNAnimated } from "react-native";
import { AnimatedCoordinatesArray } from "./AnimatedCoordinatesArray.js";
import { AnimatedExtractCoordinateFromArray } from "./AnimatedExtractCoordinateFromArray.js";
import { AnimatedRouteCoordinatesArray } from "./AnimatedRouteCoordinatesArray.js";
import { AnimatedShape } from "./AnimatedShape.js";
import { BackgroundLayer } from "../../components/layers/BackgroundLayer.js";
import { CircleLayer } from "../../components/layers/CircleLayer.js";
import { FillExtrusionLayer } from "../../components/layers/FillExtrusionLayer.js";
import { FillLayer } from "../../components/layers/FillLayer.js";
import { LineLayer } from "../../components/layers/LineLayer.js";
import { RasterLayer } from "../../components/layers/RasterLayer.js";
import { SymbolLayer } from "../../components/layers/SymbolLayer.js";
import { ImageSource } from "../../components/sources/ImageSource.js";
import { ShapeSource } from "../../components/sources/ShapeSource.js";
export const Animated = {
  // sources
  ShapeSource: RNAnimated.createAnimatedComponent(ShapeSource),
  ImageSource: RNAnimated.createAnimatedComponent(ImageSource),
  // layers
  FillLayer: RNAnimated.createAnimatedComponent(FillLayer),
  FillExtrusionLayer: RNAnimated.createAnimatedComponent(FillExtrusionLayer),
  LineLayer: RNAnimated.createAnimatedComponent(LineLayer),
  CircleLayer: RNAnimated.createAnimatedComponent(CircleLayer),
  SymbolLayer: RNAnimated.createAnimatedComponent(SymbolLayer),
  RasterLayer: RNAnimated.createAnimatedComponent(RasterLayer),
  BackgroundLayer: RNAnimated.createAnimatedComponent(BackgroundLayer),
  // values
  CoordinatesArray: AnimatedCoordinatesArray,
  RouteCoordinatesArray: AnimatedRouteCoordinatesArray,
  Shape: AnimatedShape,
  ExtractCoordinateFromArray: AnimatedExtractCoordinateFromArray
};
//# sourceMappingURL=Animated.js.map