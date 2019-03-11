/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSScrubberItemLayoutDiscrete<T = any> extends cocoa.NSObject, cocoa.NSScrubberItemLayoutProtocol {
    dealloc<R = void>(): R;
    cleanState<R = unknown>(): R;
    setCleanState<R = void, P0 = unknown>(_v: P0): R;
    scrubberLayout<R = cocoa.NSScrubberLayout>(): R;
    setScrubberLayout<R = void, P0 = cocoa.NSScrubberLayout>(_v: P0): R;
    wantsTrackingPosition<R = boolean>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSScrubberItemLayoutDiscrete<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSScrubberItemLayoutProtocol {
      alloc<R = NSScrubberItemLayoutDiscrete>(): R;
      new: <R = NSScrubberItemLayoutDiscrete>() => R;
    }
  }
}

declare const NSScrubberItemLayoutDiscrete: cocoa.classes.NSScrubberItemLayoutDiscrete;
