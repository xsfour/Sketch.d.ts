/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSNoise<T = any> extends NSObject {}
  namespace classes {
    export interface MSNoise<T = any> extends NSObject {
      alloc<R = MSNoise>(): R;
      new: <R = MSNoise>() => R;
      drawWithIntensity_ofType_inRect_zoomValue_context<R = void, P0 = number, P1 = number, P2 = CGRect, P3 = number, P4 = CGContext>(_drawWithIntensity: P0, _ofType: P1, _inRect: P2, _zoomValue: P3, _context: P4): R;
      drawWithIntensity_ofType_inPath_windingRule_zoomValue_context<R = void, P0 = number, P1 = number, P2 = unknown, P3 = number, P4 = number, P5 = CGContext>(_drawWithIntensity: P0, _ofType: P1, _inPath: P2, _windingRule: P3, _zoomValue: P4, _context: P5): R;
      noiseIsOpaqueForType<R = boolean, P0 = number>(_noiseIsOpaqueForType: P0): R;
    }
  }
}

declare const MSNoise: cocoa.classes.MSNoise;
