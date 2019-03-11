/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface HICocoaWindowContentView<T = any> extends cocoa.NSView {
    _receivedEvent<R = boolean>(): R;
    _resetEventReceivedFlag<R = void>(): R;
    getContentHIView<R = cocoa.OpaqueControlRef>(): R;
    invalidateHICocoaViewSubViewsOf_withInvalidRect_ofView<R = void, P0 = cocoa.OpaqueControlRef, P1 = cocoa.CGRect, P2 = cocoa.OpaqueControlRef>(_invalidateHICocoaViewSubViewsOf: P0, _withInvalidRect: P1, _ofView: P2): R;
    isOpaque<R = boolean>(): R;
  }
  namespace classes {
    export interface HICocoaWindowContentView<T = any> extends cocoa.classes.NSView {
      alloc<R = HICocoaWindowContentView>(): R;
      new: <R = HICocoaWindowContentView>() => R;
    }
  }
}

declare const HICocoaWindowContentView: cocoa.classes.HICocoaWindowContentView;
