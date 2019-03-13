/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _SVGSymbolElement<T = any> extends SVGGroupElement {}
  namespace classes {
    export interface _SVGSymbolElement<T = any> extends SVGGroupElement {
      alloc<R = _SVGSymbolElement>(): R;
      new: <R = _SVGSymbolElement>() => R;
    }
  }
}
