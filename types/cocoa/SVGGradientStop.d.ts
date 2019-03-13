/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface SVGGradientStop<T = any> extends _SVGGradientStop {}
  namespace classes {
    export interface SVGGradientStop<T = any> extends _SVGGradientStop {
      alloc<R = SVGGradientStop>(): R;
      new: <R = SVGGradientStop>() => R;
      styleDefaults<R = unknown>(): R;
    }
  }
}

declare const SVGGradientStop: cocoa.classes.SVGGradientStop;
