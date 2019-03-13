/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface SVGCircleShape<T = any> extends _SVGCircleShape {}
  namespace classes {
    export interface SVGCircleShape<T = any> extends _SVGCircleShape {
      alloc<R = SVGCircleShape>(): R;
      new: <R = SVGCircleShape>() => R;
    }
  }
}

declare const SVGCircleShape: cocoa.classes.SVGCircleShape;
