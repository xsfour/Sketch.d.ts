/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSScrubberItemLayoutTween<T = any> extends cocoa.NSObject, cocoa.NSScrubberItemLayoutProtocol {
    layoutAttributesWithPrimaryAttributes_secondaryAttributes_ratioOfSecondary<R = unknown, P0 = unknown, P1 = unknown, P2 = number>(_layoutAttributesWithPrimaryAttributes: P0, _secondaryAttributes: P1, _ratioOfSecondary: P2): R;
    recacheLayoutAttributesForModelStateIfNeeded_inView<R = void, P0 = unknown, P1 = unknown>(_recacheLayoutAttributesForModelStateIfNeeded: P0, _inView: P1): R;
    dealloc<R = void>(): R;
    cachedSecondarySelection<R = cocoa.NSSet>(): R;
    setCachedSecondarySelection<R = void, P0 = cocoa.NSSet>(_v: P0): R;
    cachedPrimarySelection<R = cocoa.NSSet>(): R;
    setCachedPrimarySelection<R = void, P0 = cocoa.NSSet>(_v: P0): R;
    cachedSecondaryKey<R = unknown>(): R;
    setCachedSecondaryKey<R = void, P0 = unknown>(_v: P0): R;
    cachedPrimaryKey<R = unknown>(): R;
    setCachedPrimaryKey<R = void, P0 = unknown>(_v: P0): R;
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
    export interface NSScrubberItemLayoutTween<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSScrubberItemLayoutProtocol {
      alloc<R = NSScrubberItemLayoutTween>(): R;
      new: <R = NSScrubberItemLayoutTween>() => R;
    }
  }
}

declare const NSScrubberItemLayoutTween: cocoa.classes.NSScrubberItemLayoutTween;
