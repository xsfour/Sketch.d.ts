/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface SVGCircleShape<T = any> extends cocoa._SVGCircleShape {}
  namespace classes {
    export interface SVGCircleShape<T = any> extends cocoa.classes._SVGCircleShape {
      alloc<R = SVGCircleShape>(): R;
      new: <R = SVGCircleShape>() => R;
    }
  }
}

declare const SVGCircleShape: cocoa.classes.SVGCircleShape;
