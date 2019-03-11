/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSLayerCachedImage<T = any> extends cocoa.NSObject {
    dealloc<R = void>(): R;
    image<R = cocoa.CGImage>(): R;
    setImage<R = void, P0 = cocoa.CGImage>(_v: P0): R;
    rect<R = cocoa.CGRect>(): R;
    setRect<R = void, P0 = cocoa.CGRect>(_v: P0): R;
  }
  namespace classes {
    export interface MSLayerCachedImage<T = any> extends cocoa.classes.NSObject {
      alloc<R = MSLayerCachedImage>(): R;
      new: <R = MSLayerCachedImage>() => R;
    }
  }
}

declare const MSLayerCachedImage: cocoa.classes.MSLayerCachedImage;
