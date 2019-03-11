/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSCGSWindowOpenGLSurface<T = any> extends cocoa.NSCGSWindowOpenGLSurface {
    setFrame<R = void, P0 = cocoa.CGRect>(_setFrame: P0): R;
    frame<R = cocoa.CGRect>(): R;
    setColorSpace<R = void, P0 = cocoa.CGColorSpace>(_setColorSpace: P0): R;
    colorSpace<R = cocoa.CGColorSpace>(): R;
    setOpaque<R = void, P0 = boolean>(_setOpaque: P0): R;
    isOpaque<R = boolean>(): R;
    setScale<R = void, P0 = number>(_setScale: P0): R;
    scale<R = number>(): R;
    surfaceID<R = number>(): R;
    window<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithWindow<R = unknown, P0 = unknown>(_initWithWindow: P0): R;
  }
  namespace classes {
    export interface _NSCGSWindowOpenGLSurface<T = any> extends cocoa.classes.NSCGSWindowOpenGLSurface {
      alloc<R = _NSCGSWindowOpenGLSurface>(): R;
      new: <R = _NSCGSWindowOpenGLSurface>() => R;
    }
  }
}
