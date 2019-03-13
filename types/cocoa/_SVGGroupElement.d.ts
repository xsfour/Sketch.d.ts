/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _SVGGroupElement<T = any> extends SVGDrawableElement {}
  namespace classes {
    export interface _SVGGroupElement<T = any> extends SVGDrawableElement {
      alloc<R = _SVGGroupElement>(): R;
      new: <R = _SVGGroupElement>() => R;
    }
  }
}
