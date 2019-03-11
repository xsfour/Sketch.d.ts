/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface SVGGradientStop<T = any> extends cocoa._SVGGradientStop {}
  namespace classes {
    export interface SVGGradientStop<T = any> extends cocoa.classes._SVGGradientStop {
      alloc<R = SVGGradientStop>(): R;
      new: <R = SVGGradientStop>() => R;
      styleDefaults<R = unknown>(): R;
    }
  }
}

declare const SVGGradientStop: cocoa.classes.SVGGradientStop;
