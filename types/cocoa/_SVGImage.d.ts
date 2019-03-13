/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _SVGImage<T = any> extends SVGDrawableElement {
    image<R = NSImage>(): R;
    setImage<R = void, P0 = NSImage>(_v: P0): R;
  }
  namespace classes {
    export interface _SVGImage<T = any> extends SVGDrawableElement {
      alloc<R = _SVGImage>(): R;
      new: <R = _SVGImage>() => R;
    }
  }
}
