/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface SVGRectangleShape<T = any> extends _SVGRectangleShape {}
  namespace classes {
    export interface SVGRectangleShape<T = any> extends _SVGRectangleShape {
      alloc<R = SVGRectangleShape>(): R;
      new: <R = SVGRectangleShape>() => R;
    }
  }
}

declare const SVGRectangleShape: cocoa.classes.SVGRectangleShape;
