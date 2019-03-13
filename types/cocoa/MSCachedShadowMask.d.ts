/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCachedShadowMask<T = any> extends NSObject {
    dealloc<R = void>(): R;
    initWithCGImage_drawingRect<R = unknown, P0 = CGImage, P1 = CGRect>(_initWithCGImage: P0, _drawingRect: P1): R;
    drawingRect<R = CGRect>(): R;
    image<R = CGImage>(): R;
  }
  namespace classes {
    export interface MSCachedShadowMask<T = any> extends NSObject {
      alloc<R = MSCachedShadowMask>(): R;
      new: <R = MSCachedShadowMask>() => R;
    }
  }
}

declare const MSCachedShadowMask: cocoa.classes.MSCachedShadowMask;
