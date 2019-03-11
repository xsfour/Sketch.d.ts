/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSScrubberItemLayoutProtocol<T = any> extends cocoa.NSObjectProtocol {
    invalidateForStateIfNeeded<R = void, P0 = unknown>(_invalidateForStateIfNeeded: P0): R;
    itemLayoutAttributesForItemAtIndex_withState_inView<R = cocoa.NSScrubberLayoutAttributes, P0 = number, P1 = unknown, P2 = cocoa.NSView>(_itemLayoutAttributesForItemAtIndex: P0, _withState: P1, _inView: P2): R;
    itemLayoutAttributesForState_inView<R = cocoa.NSSet, P0 = unknown, P1 = cocoa.NSView>(_itemLayoutAttributesForState: P0, _inView: P1): R;
    wantsTrackingPosition<R = boolean>(): R;
    scrubberLayout<R = cocoa.NSScrubberLayout>(): R;
    setScrubberLayout<R = void, P0 = cocoa.NSScrubberLayout>(_v: P0): R;
  }
  namespace classes {
    export interface NSScrubberItemLayoutProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const NSScrubberItemLayoutProtocol: cocoa.classes.NSScrubberItemLayoutProtocol;
