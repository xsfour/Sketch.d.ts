/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface SVGStyle<T = any> extends cocoa.SVGElement {}
  namespace classes {
    export interface SVGStyle<T = any> extends cocoa.classes.SVGElement {
      alloc<R = SVGStyle>(): R;
      new: <R = SVGStyle>() => R;
    }
  }
}

declare const SVGStyle: cocoa.classes.SVGStyle;
