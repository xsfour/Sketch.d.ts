/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface SVGEllipseShape<T = any> extends _SVGEllipseShape {}
  namespace classes {
    export interface SVGEllipseShape<T = any> extends _SVGEllipseShape {
      alloc<R = SVGEllipseShape>(): R;
      new: <R = SVGEllipseShape>() => R;
    }
  }
}

declare const SVGEllipseShape: cocoa.classes.SVGEllipseShape;
