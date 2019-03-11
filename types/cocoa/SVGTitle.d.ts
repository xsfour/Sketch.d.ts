/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface SVGTitle<T = any> extends cocoa.SVGElement {}
  namespace classes {
    export interface SVGTitle<T = any> extends cocoa.classes.SVGElement {
      alloc<R = SVGTitle>(): R;
      new: <R = SVGTitle>() => R;
    }
  }
}

declare const SVGTitle: cocoa.classes.SVGTitle;
