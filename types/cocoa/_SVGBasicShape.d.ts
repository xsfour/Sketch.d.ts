/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _SVGBasicShape<T = any> extends cocoa.SVGDrawableElement {}
  namespace classes {
    export interface _SVGBasicShape<T = any> extends cocoa.classes.SVGDrawableElement {
      alloc<R = _SVGBasicShape>(): R;
      new: <R = _SVGBasicShape>() => R;
    }
  }
}
