/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCGSWindowOpenGLSurface<T = any> extends NSCGSWindowSurface {
    detachCGLContext<R = void, P0 = _CGLContextObject>(_detachCGLContext: P0): R;
    attachCGLContext<R = void, P0 = _CGLContextObject>(_attachCGLContext: P0): R;
    colorSpace<R = CGColorSpace>(): R;
    setColorSpace<R = void, P0 = CGColorSpace>(_v: P0): R;
    opaque<R = boolean>(): R;
    setOpaque<R = void, P0 = boolean>(_v: P0): R;
    scale<R = number>(): R;
    setScale<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface NSCGSWindowOpenGLSurface<T = any> extends NSCGSWindowSurface {
      alloc<R = NSCGSWindowOpenGLSurface>(): R;
      new: <R = NSCGSWindowOpenGLSurface>() => R;
    }
  }
}

declare const NSCGSWindowOpenGLSurface: cocoa.classes.NSCGSWindowOpenGLSurface;
