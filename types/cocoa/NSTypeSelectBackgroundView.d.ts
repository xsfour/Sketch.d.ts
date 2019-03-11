/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTypeSelectBackgroundView<T = any> extends cocoa.NSView {
    isOpaque<R = boolean>(): R;
    backgroundColor<R = cocoa.NSColor>(): R;
    setBackgroundColor<R = void, P0 = cocoa.NSColor>(_v: P0): R;
    strokeColor<R = cocoa.NSColor>(): R;
    setStrokeColor<R = void, P0 = cocoa.NSColor>(_v: P0): R;
  }
  namespace classes {
    export interface NSTypeSelectBackgroundView<T = any> extends cocoa.classes.NSView {
      alloc<R = NSTypeSelectBackgroundView>(): R;
      new: <R = NSTypeSelectBackgroundView>() => R;
    }
  }
}

declare const NSTypeSelectBackgroundView: cocoa.classes.NSTypeSelectBackgroundView;
