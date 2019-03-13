/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface SVGStyle<T = any> extends SVGElement {}
  namespace classes {
    export interface SVGStyle<T = any> extends SVGElement {
      alloc<R = SVGStyle>(): R;
      new: <R = SVGStyle>() => R;
    }
  }
}

declare const SVGStyle: cocoa.classes.SVGStyle;
