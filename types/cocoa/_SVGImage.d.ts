/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _SVGImage<T = any> extends cocoa.SVGDrawableElement {
    image<R = cocoa.NSImage>(): R;
    setImage<R = void, P0 = cocoa.NSImage>(_v: P0): R;
  }
  namespace classes {
    export interface _SVGImage<T = any> extends cocoa.classes.SVGDrawableElement {
      alloc<R = _SVGImage>(): R;
      new: <R = _SVGImage>() => R;
    }
  }
}
