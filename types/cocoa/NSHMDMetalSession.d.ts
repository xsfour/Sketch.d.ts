/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSHMDMetalSession<T = any> extends cocoa.NSObject {
    dealloc<R = void>(): R;
    initWithDevice_error<R = unknown, P0 = unknown, P1 = unknown>(_initWithDevice: P0, _error: P1): R;
    invalidate<R = void>(): R;
    displayLinkWithHandler<R = unknown, P0 = cocoa.CDUnknownBlockType>(_displayLinkWithHandler: P0): R;
    nextDrawable<R = unknown>(): R;
    valid<R = boolean>(): R;
    metalDevice<R = cocoa.MTLDevice>(): R;
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
    export interface NSHMDMetalSession<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSHMDMetalSession>(): R;
      new: <R = NSHMDMetalSession>() => R;
      keyPathsForValuesAffectingValid<R = unknown>(): R;
    }
  }
}

declare const NSHMDMetalSession: cocoa.classes.NSHMDMetalSession;
