/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSWindowGraphicsContext<T = any> extends cocoa.NSCGSContext {
    isDrawingToScreen<R = boolean>(): R;
    attributes<R = unknown>(): R;
    initWithWindow<R = unknown, P0 = unknown>(_initWithWindow: P0): R;
    _initWithWindowNumber<R = unknown, P0 = number>(__initWithWindowNumber: P0): R;
  }
  namespace classes {
    export interface NSWindowGraphicsContext<T = any> extends cocoa.classes.NSCGSContext {
      alloc<R = NSWindowGraphicsContext>(): R;
      new: <R = NSWindowGraphicsContext>() => R;
    }
  }
}

declare const NSWindowGraphicsContext: cocoa.classes.NSWindowGraphicsContext;
