/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSBaselineView<T = any> extends cocoa.NSView {
    cxx_destruct<R = void>(): R;
    realBaselineView<R = cocoa.NSView>(): R;
    setRealBaselineView<R = void, P0 = cocoa.NSView>(_v: P0): R;
  }
  namespace classes {
    export interface NSBaselineView<T = any> extends cocoa.classes.NSView {
      alloc<R = NSBaselineView>(): R;
      new: <R = NSBaselineView>() => R;
    }
  }
}

declare const NSBaselineView: cocoa.classes.NSBaselineView;
