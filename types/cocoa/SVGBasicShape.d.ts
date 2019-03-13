/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface SVGBasicShape<T = any> extends _SVGBasicShape {
    shapeGroupForLayer<R = unknown, P0 = unknown>(_shapeGroupForLayer: P0): R;
  }
  namespace classes {
    export interface SVGBasicShape<T = any> extends _SVGBasicShape {
      alloc<R = SVGBasicShape>(): R;
      new: <R = SVGBasicShape>() => R;
    }
  }
}

declare const SVGBasicShape: cocoa.classes.SVGBasicShape;
