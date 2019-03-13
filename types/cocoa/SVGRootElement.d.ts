/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface SVGRootElement<T = any> extends _SVGRootElement {}
  namespace classes {
    export interface SVGRootElement<T = any> extends _SVGRootElement {
      alloc<R = SVGRootElement>(): R;
      new: <R = SVGRootElement>() => R;
    }
  }
}

declare const SVGRootElement: cocoa.classes.SVGRootElement;
