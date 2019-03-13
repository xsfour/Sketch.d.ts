/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface SVGLink<T = any> extends _SVGLink {
    effectiveLayerName<R = unknown>(): R;
  }
  namespace classes {
    export interface SVGLink<T = any> extends _SVGLink {
      alloc<R = SVGLink>(): R;
      new: <R = SVGLink>() => R;
    }
  }
}

declare const SVGLink: cocoa.classes.SVGLink;
