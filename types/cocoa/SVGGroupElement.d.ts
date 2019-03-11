/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface SVGGroupElement<T = any> extends cocoa._SVGGroupElement {}
  namespace classes {
    export interface SVGGroupElement<T = any> extends cocoa.classes._SVGGroupElement {
      alloc<R = SVGGroupElement>(): R;
      new: <R = SVGGroupElement>() => R;
    }
  }
}

declare const SVGGroupElement: cocoa.classes.SVGGroupElement;
