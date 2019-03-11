/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _SVGPolygonShape<T = any> extends cocoa.SVGPathShape {}
  namespace classes {
    export interface _SVGPolygonShape<T = any> extends cocoa.classes.SVGPathShape {
      alloc<R = _SVGPolygonShape>(): R;
      new: <R = _SVGPolygonShape>() => R;
    }
  }
}
