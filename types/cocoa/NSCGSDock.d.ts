/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCGSDock<T = any> extends cocoa.NSObject {
    description<R = unknown>(): R;
    initWithFrame_orientation<R = unknown, P0 = cocoa.CGRect, P1 = number>(_initWithFrame: P0, _orientation: P1): R;
    updatedDockForDisplays<R = unknown, P0 = unknown>(_updatedDockForDisplays: P0): R;
    orientation<R = number>(): R;
    frame<R = cocoa.CGRect>(): R;
  }
  namespace classes {
    export interface NSCGSDock<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSCGSDock>(): R;
      new: <R = NSCGSDock>() => R;
      currentDockForDisplays<R = unknown, P0 = unknown>(_currentDockForDisplays: P0): R;
    }
  }
}

declare const NSCGSDock: cocoa.classes.NSCGSDock;
