/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSVGBlendMode<T = any> extends NSObject {}
  namespace classes {
    export interface MSSVGBlendMode<T = any> extends NSObject {
      alloc<R = MSSVGBlendMode>(): R;
      new: <R = MSSVGBlendMode>() => R;
      svgFromSketchBlendMode<R = unknown, P0 = number>(_svgFromSketchBlendMode: P0): R;
      sketchBlendModeFromSVG<R = number, P0 = unknown>(_sketchBlendModeFromSVG: P0): R;
      initialize<R = void>(): R;
    }
  }
}

declare const MSSVGBlendMode: cocoa.classes.MSSVGBlendMode;
