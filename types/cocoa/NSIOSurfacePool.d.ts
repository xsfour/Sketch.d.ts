/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSIOSurfacePool<T = any> extends cocoa.NSObject {
    dealloc<R = void>(): R;
    initWithSurfaceProperties<R = unknown, P0 = unknown>(_initWithSurfaceProperties: P0): R;
    nextUnusedSurface<R = cocoa.IOSurface>(): R;
  }
  namespace classes {
    export interface NSIOSurfacePool<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSIOSurfacePool>(): R;
      new: <R = NSIOSurfacePool>() => R;
    }
  }
}

declare const NSIOSurfacePool: cocoa.classes.NSIOSurfacePool;
