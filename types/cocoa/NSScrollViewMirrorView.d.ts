/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSScrollViewMirrorView<T = any> extends cocoa.NSView {
    observeValueForKeyPath_ofObject_change_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = void>(_observeValueForKeyPath: P0, _ofObject: P1, _change: P2, _context: P3): R;
    associatedScrollView<R = cocoa.NSScrollView>(): R;
    setAssociatedScrollView<R = void, P0 = cocoa.NSScrollView>(_v: P0): R;
  }
  namespace classes {
    export interface NSScrollViewMirrorView<T = any> extends cocoa.classes.NSView {
      alloc<R = NSScrollViewMirrorView>(): R;
      new: <R = NSScrollViewMirrorView>() => R;
      automaticallyNotifiesObserversOfAssociatedScrollView<R = boolean>(): R;
    }
  }
}

declare const NSScrollViewMirrorView: cocoa.classes.NSScrollViewMirrorView;
