/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface SVGLineShape<T = any> extends _SVGLineShape {}
  namespace classes {
    export interface SVGLineShape<T = any> extends _SVGLineShape {
      alloc<R = SVGLineShape>(): R;
      new: <R = SVGLineShape>() => R;
    }
  }
}

declare const SVGLineShape: cocoa.classes.SVGLineShape;
