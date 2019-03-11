/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface SVGStroke<T = any> extends cocoa._SVGStroke {
    setupFromString_opacity<R = void, P0 = unknown, P1 = unknown>(_setupFromString: P0, _opacity: P1): R;
  }
  namespace classes {
    export interface SVGStroke<T = any> extends cocoa.classes._SVGStroke {
      alloc<R = SVGStroke>(): R;
      new: <R = SVGStroke>() => R;
      strokeForXML_element_parent<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_strokeForXML: P0, _element: P1, _parent: P2): R;
      styleDefaults<R = unknown>(): R;
    }
  }
}

declare const SVGStroke: cocoa.classes.SVGStroke;
