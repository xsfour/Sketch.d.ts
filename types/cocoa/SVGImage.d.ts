/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface SVGImage<T = any> extends cocoa._SVGImage {}
  namespace classes {
    export interface SVGImage<T = any> extends cocoa.classes._SVGImage {
      alloc<R = SVGImage>(): R;
      new: <R = SVGImage>() => R;
      initialize<R = void>(): R;
    }
  }
}

declare const SVGImage: cocoa.classes.SVGImage;
