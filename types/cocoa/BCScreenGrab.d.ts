/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCScreenGrab<T = any> extends cocoa.NSObject {
    cxx_destruct<R = void>(): R;
    bitmapImageRepCroppingToRect<R = unknown, P0 = cocoa.CGRect>(_bitmapImageRepCroppingToRect: P0): R;
    currentScreen<R = unknown>(): R;
    initWithBitmapImageRep_originOnScreen_colorSpace_displayID<R = unknown, P0 = unknown, P1 = cocoa.CGPoint, P2 = unknown, P3 = number>(_initWithBitmapImageRep: P0, _originOnScreen: P1, _colorSpace: P2, _displayID: P3): R;
    colorSpace<R = cocoa.NSColorSpace>(): R;
    imageOrigin<R = cocoa.CGPoint>(): R;
    setImageOrigin<R = void, P0 = cocoa.CGPoint>(_v: P0): R;
    bitmapRep<R = cocoa.NSBitmapImageRep>(): R;
    image<R = cocoa.NSImage>(): R;
    displayID<R = number>(): R;
    isRetinaScreen<R = boolean>(): R;
    screenFrame<R = cocoa.CGRect>(): R;
  }
  namespace classes {
    export interface BCScreenGrab<T = any> extends cocoa.classes.NSObject {
      alloc<R = BCScreenGrab>(): R;
      new: <R = BCScreenGrab>() => R;
      screenGrabForDisplay_belowWindowWithID<R = unknown, P0 = number, P1 = number>(_screenGrabForDisplay: P0, _belowWindowWithID: P1): R;
      screenGrabWithBitmapImageRep_originOnScreen_colorSpace_displayID<R = unknown, P0 = unknown, P1 = cocoa.CGPoint, P2 = unknown, P3 = number>(_screenGrabWithBitmapImageRep: P0, _originOnScreen: P1, _colorSpace: P2, _displayID: P3): R;
    }
  }
}

declare const BCScreenGrab: cocoa.classes.BCScreenGrab;
