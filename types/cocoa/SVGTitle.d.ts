/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface SVGTitle<T = any> extends SVGElement {}
  namespace classes {
    export interface SVGTitle<T = any> extends SVGElement {
      alloc<R = SVGTitle>(): R;
      new: <R = SVGTitle>() => R;
    }
  }
}

declare const SVGTitle: cocoa.classes.SVGTitle;
