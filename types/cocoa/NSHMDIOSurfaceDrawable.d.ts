/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSHMDIOSurfaceDrawable<T = any> extends cocoa.NSObject {
    presentAtTimestamp<R = void, P0 = number>(_presentAtTimestamp: P0): R;
    dealloc<R = void>(): R;
    initWithSession_SLSHMDDrawable<R = unknown, P0 = unknown, P1 = unknown>(_initWithSession: P0, _SLSHMDDrawable: P1): R;
    debugSignpost<R = number>(): R;
    setDebugSignpost<R = void, P0 = number>(_v: P0): R;
    inputTimeStamp<R = number>(): R;
    setInputTimeStamp<R = void, P0 = number>(_v: P0): R;
    IOSurface<R = cocoa.IOSurface>(): R;
    session<R = cocoa.NSHMDIOSurfaceSession>(): R;
  }
  namespace classes {
    export interface NSHMDIOSurfaceDrawable<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSHMDIOSurfaceDrawable>(): R;
      new: <R = NSHMDIOSurfaceDrawable>() => R;
    }
  }
}

declare const NSHMDIOSurfaceDrawable: cocoa.classes.NSHMDIOSurfaceDrawable;
