/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _SVGGroupElement<T = any> extends cocoa.SVGDrawableElement {}
  namespace classes {
    export interface _SVGGroupElement<T = any> extends cocoa.classes.SVGDrawableElement {
      alloc<R = _SVGGroupElement>(): R;
      new: <R = _SVGGroupElement>() => R;
    }
  }
}
