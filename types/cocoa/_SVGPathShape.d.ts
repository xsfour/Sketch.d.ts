/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _SVGPathShape<T = any> extends cocoa.SVGDrawableElement {
    path<R = cocoa.NSBezierPath>(): R;
    setPath<R = void, P0 = cocoa.NSBezierPath>(_v: P0): R;
    closed<R = boolean>(): R;
    setClosed<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace classes {
    export interface _SVGPathShape<T = any> extends cocoa.classes.SVGDrawableElement {
      alloc<R = _SVGPathShape>(): R;
      new: <R = _SVGPathShape>() => R;
    }
  }
}
