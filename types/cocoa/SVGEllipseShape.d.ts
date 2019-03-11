/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface SVGEllipseShape<T = any> extends cocoa._SVGEllipseShape {}
  namespace classes {
    export interface SVGEllipseShape<T = any> extends cocoa.classes._SVGEllipseShape {
      alloc<R = SVGEllipseShape>(): R;
      new: <R = SVGEllipseShape>() => R;
    }
  }
}

declare const SVGEllipseShape: cocoa.classes.SVGEllipseShape;
