/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCGSDisplay<T = any> extends cocoa.NSObject {
    description<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithDisplayID_flipOffset<R = unknown, P0 = number, P1 = number>(_initWithDisplayID: P0, _flipOffset: P1): R;
    colorSpace<R = cocoa.CGColorSpace>(): R;
    UUID<R = cocoa.NSUUID>(): R;
    maxHDRValue<R = number>(): R;
    devicePixelCounts<R = cocoa.CGSize>(): R;
    backingPixelsPerPoint<R = number>(): R;
    depth<R = number>(): R;
    frame<R = cocoa.CGRect>(): R;
    displayID<R = number>(): R;
  }
  namespace classes {
    export interface NSCGSDisplay<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSCGSDisplay>(): R;
      new: <R = NSCGSDisplay>() => R;
      displaysWillChange<R = boolean>(): R;
      updateSeeds<R = boolean>(): R;
      uniqueDisplays<R = unknown>(): R;
      changeSeed<R = number>(): R;
      flipOffset<R = number>(): R;
      addColorSpaceChangedHandler<R = void, P0 = cocoa.CDUnknownBlockType>(_addColorSpaceChangedHandler: P0): R;
      addMaximumHDRValueChangedHandler<R = void, P0 = cocoa.CDUnknownBlockType>(_addMaximumHDRValueChangedHandler: P0): R;
      addAcceleratorChangedHandler<R = void, P0 = cocoa.CDUnknownBlockType>(_addAcceleratorChangedHandler: P0): R;
      addDisplayChangedHandler<R = void, P0 = cocoa.CDUnknownBlockType>(_addDisplayChangedHandler: P0): R;
    }
  }
}

declare const NSCGSDisplay: cocoa.classes.NSCGSDisplay;
