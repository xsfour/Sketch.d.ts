/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCGLSurface<T = any> extends cocoa.NSObject {
    flushRect<R = void, P0 = cocoa.CGRect>(_flushRect: P0): R;
    isAttachedToCGLContext<R = boolean, P0 = cocoa._CGLContextObject>(_isAttachedToCGLContext: P0): R;
    attachToCGLContext<R = void, P0 = cocoa._CGLContextObject>(_attachToCGLContext: P0): R;
    initWithSize_colorSpace_atomic<R = unknown, P0 = cocoa.CGSize, P1 = cocoa.CGColorSpace, P2 = boolean>(_initWithSize: P0, _colorSpace: P1, _atomic: P2): R;
    colorSpace<R = cocoa.CGColorSpace>(): R;
    opaque<R = boolean>(): R;
    floatingPoint<R = boolean>(): R;
    bitsPerPixel<R = number>(): R;
    bitsPerComponent<R = number>(): R;
    stereo<R = boolean>(): R;
    displayMask<R = number>(): R;
    size<R = cocoa.CGSize>(): R;
    rightImage<R = cocoa.CGImage>(): R;
    leftImage<R = cocoa.CGImage>(): R;
    image<R = cocoa.CGImage>(): R;
    layerContents<R = unknown>(): R;
  }
  namespace classes {
    export interface NSCGLSurface<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSCGLSurface>(): R;
      new: <R = NSCGLSurface>() => R;
      allocWithZone<R = unknown, P0 = cocoa._NSZone>(_allocWithZone: P0): R;
    }
  }
}

declare const NSCGLSurface: cocoa.classes.NSCGLSurface;
