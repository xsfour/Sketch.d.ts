/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface SVGGradient<T = any> extends _SVGGradient {
    stopsElements<R = unknown>(): R;
    to<R = CGPoint>(): R;
    from<R = CGPoint>(): R;
    setupLinearGradientWithXML<R = void, P0 = unknown>(_setupLinearGradientWithXML: P0): R;
    setupRadialGradientWithXML<R = void, P0 = unknown>(_setupRadialGradientWithXML: P0): R;
    usesAbsoluteUnits<R = boolean>(): R;
  }
  namespace classes {
    export interface SVGGradient<T = any> extends _SVGGradient {
      alloc<R = SVGGradient>(): R;
      new: <R = SVGGradient>() => R;
    }
  }
}

declare const SVGGradient: cocoa.classes.SVGGradient;
