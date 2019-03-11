/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSScrubberItemLayoutDiscreteWithLens<T = any> extends cocoa.NSScrubberItemLayoutDiscrete, cocoa.NSScrubberItemLayoutProtocol {
    _updateAttributes_forLensWithState_inView<R = void, P0 = unknown, P1 = unknown, P2 = unknown>(__updateAttributes: P0, _forLensWithState: P1, _inView: P2): R;
    _wantsLensForState<R = boolean, P0 = unknown>(__wantsLensForState: P0): R;
    selectionLensThreshold<R = cocoa.CGSize>(): R;
    setSelectionLensThreshold<R = void, P0 = cocoa.CGSize>(_v: P0): R;
    wantsTrackingPosition<R = boolean>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    scrubberLayout<R = cocoa.NSScrubberLayout>(): R;
    setScrubberLayout<R = void, P0 = cocoa.NSScrubberLayout>(_v: P0): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSScrubberItemLayoutDiscreteWithLens<T = any> extends cocoa.classes.NSScrubberItemLayoutDiscrete, cocoa.classes.NSScrubberItemLayoutProtocol {
      alloc<R = NSScrubberItemLayoutDiscreteWithLens>(): R;
      new: <R = NSScrubberItemLayoutDiscreteWithLens>() => R;
    }
  }
}

declare const NSScrubberItemLayoutDiscreteWithLens: cocoa.classes.NSScrubberItemLayoutDiscreteWithLens;
