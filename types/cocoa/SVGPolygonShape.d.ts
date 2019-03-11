/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface SVGPolygonShape<T = any> extends cocoa._SVGPolygonShape {}
  namespace classes {
    export interface SVGPolygonShape<T = any> extends cocoa.classes._SVGPolygonShape {
      alloc<R = SVGPolygonShape>(): R;
      new: <R = SVGPolygonShape>() => R;
    }
  }
}

declare const SVGPolygonShape: cocoa.classes.SVGPolygonShape;
