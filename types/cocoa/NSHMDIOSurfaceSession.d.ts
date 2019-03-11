/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSHMDIOSurfaceSession<T = any> extends cocoa.NSObject {
    observeValueForKeyPath_ofObject_change_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = void>(_observeValueForKeyPath: P0, _ofObject: P1, _change: P2, _context: P3): R;
    dealloc<R = void>(): R;
    initWithDevice_error<R = unknown, P0 = unknown, P1 = unknown>(_initWithDevice: P0, _error: P1): R;
    invalidate<R = void>(): R;
    displayLinkWithHandler<R = unknown, P0 = cocoa.CDUnknownBlockType>(_displayLinkWithHandler: P0): R;
    nextDrawable<R = unknown>(): R;
    setDrawableCount<R = void, P0 = number>(_setDrawableCount: P0): R;
    drawableCount<R = number>(): R;
    valid<R = boolean>(): R;
    preferredAcceleratorPort<R = number>(): R;
    preferredDrawablePixelFormat<R = number>(): R;
    supportedDrawablePixelFormats<R = cocoa.NSArray>(): R;
    maxDrawableSize<R = cocoa.CGSize>(): R;
    minDrawableSize<R = cocoa.CGSize>(): R;
    preferredDrawableSize<R = cocoa.CGSize>(): R;
    drawableColorSpace<R = cocoa.NSColorSpace>(): R;
    setDrawableColorSpace<R = void, P0 = cocoa.NSColorSpace>(_v: P0): R;
    drawablePixelFormat<R = number>(): R;
    setDrawablePixelFormat<R = void, P0 = number>(_v: P0): R;
    drawableSize<R = cocoa.CGSize>(): R;
    setDrawableSize<R = void, P0 = cocoa.CGSize>(_v: P0): R;
    device<R = cocoa.NSHMDDevice>(): R;
  }
  namespace classes {
    export interface NSHMDIOSurfaceSession<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSHMDIOSurfaceSession>(): R;
      new: <R = NSHMDIOSurfaceSession>() => R;
    }
  }
}

declare const NSHMDIOSurfaceSession: cocoa.classes.NSHMDIOSurfaceSession;
