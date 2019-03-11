/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCGSWindowSurface<T = any> extends cocoa.NSObject {
    orderOut<R = void>(): R;
    orderBelowWindow<R = void>(): R;
    orderAboveWindow<R = void>(): R;
    orderBelowSurface<R = void, P0 = unknown>(_orderBelowSurface: P0): R;
    orderAboveSurface<R = void, P0 = unknown>(_orderAboveSurface: P0): R;
    orderIn<R = void>(): R;
    frame<R = cocoa.CGRect>(): R;
    setFrame<R = void, P0 = cocoa.CGRect>(_v: P0): R;
    surfaceID<R = number>(): R;
    window<R = cocoa.NSCGSWindow>(): R;
  }
  namespace classes {
    export interface NSCGSWindowSurface<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSCGSWindowSurface>(): R;
      new: <R = NSCGSWindowSurface>() => R;
      synchronize<R = void>(): R;
    }
  }
}

declare const NSCGSWindowSurface: cocoa.classes.NSCGSWindowSurface;
