/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface SVGSymbolElement<T = any> extends cocoa._SVGSymbolElement {}
  namespace classes {
    export interface SVGSymbolElement<T = any> extends cocoa.classes._SVGSymbolElement {
      alloc<R = SVGSymbolElement>(): R;
      new: <R = SVGSymbolElement>() => R;
    }
  }
}

declare const SVGSymbolElement: cocoa.classes.SVGSymbolElement;
