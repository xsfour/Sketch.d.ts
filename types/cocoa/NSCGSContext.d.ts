/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCGSContext<T = any> extends cocoa.NSGraphicsContext {
    isFlipped<R = boolean>(): R;
    _invalidate<R = void>(): R;
    windowID<R = number>(): R;
    _swapContextForCarbonDrawing<R = cocoa.CGContext, P0 = cocoa.CGContext>(__swapContextForCarbonDrawing: P0): R;
    dealloc<R = void>(): R;
    contextID<R = number>(): R;
    _alignSize_force<R = cocoa.CGSize, P0 = cocoa.CGSize, P1 = boolean>(__alignSize: P0, _force: P1): R;
    _alignPoint_force<R = cocoa.CGPoint, P0 = cocoa.CGPoint, P1 = boolean>(__alignPoint: P0, _force: P1): R;
    _alignRect_force<R = cocoa.CGRect, P0 = cocoa.CGRect, P1 = boolean>(__alignRect: P0, _force: P1): R;
    _shouldEnforcePixelAlignment<R = boolean>(): R;
    _setShouldEnforcePixelAlignment<R = void, P0 = boolean>(__setShouldEnforcePixelAlignment: P0): R;
  }
  namespace classes {
    export interface NSCGSContext<T = any> extends cocoa.classes.NSGraphicsContext {
      alloc<R = NSCGSContext>(): R;
      new: <R = NSCGSContext>() => R;
    }
  }
}

declare const NSCGSContext: cocoa.classes.NSCGSContext;
