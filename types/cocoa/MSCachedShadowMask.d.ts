/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCachedShadowMask<T = any> extends cocoa.NSObject {
    dealloc<R = void>(): R;
    initWithCGImage_drawingRect<R = unknown, P0 = cocoa.CGImage, P1 = cocoa.CGRect>(_initWithCGImage: P0, _drawingRect: P1): R;
    drawingRect<R = cocoa.CGRect>(): R;
    image<R = cocoa.CGImage>(): R;
  }
  namespace classes {
    export interface MSCachedShadowMask<T = any> extends cocoa.classes.NSObject {
      alloc<R = MSCachedShadowMask>(): R;
      new: <R = MSCachedShadowMask>() => R;
    }
  }
}

declare const MSCachedShadowMask: cocoa.classes.MSCachedShadowMask;
