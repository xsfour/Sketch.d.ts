/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPortalView<T = any> extends NSView {
    observeValueForKeyPath_ofObject_change_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = void>(_observeValueForKeyPath: P0, _ofObject: P1, _change: P2, _context: P3): R;
    sourceView<R = NSView>(): R;
    setSourceView<R = void, P0 = NSView>(_v: P0): R;
  }
  namespace classes {
    export interface NSPortalView<T = any> extends NSView {
      alloc<R = NSPortalView>(): R;
      new: <R = NSPortalView>() => R;
      automaticallyNotifiesObserversOfSourceView<R = boolean>(): R;
    }
  }
}

declare const NSPortalView: cocoa.classes.NSPortalView;
