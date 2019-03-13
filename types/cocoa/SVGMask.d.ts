/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface SVGMask<T = any> extends _SVGMask {}
  namespace classes {
    export interface SVGMask<T = any> extends _SVGMask {
      alloc<R = SVGMask>(): R;
      new: <R = SVGMask>() => R;
    }
  }
}

declare const SVGMask: cocoa.classes.SVGMask;
