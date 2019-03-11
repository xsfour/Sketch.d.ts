/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface SVGPathShape<T = any> extends cocoa._SVGPathShape {
    processPath<R = void, P0 = unknown>(_processPath: P0): R;
  }
  namespace classes {
    export interface SVGPathShape<T = any> extends cocoa.classes._SVGPathShape {
      alloc<R = SVGPathShape>(): R;
      new: <R = SVGPathShape>() => R;
    }
  }
}

declare const SVGPathShape: cocoa.classes.SVGPathShape;
