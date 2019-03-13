/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTypeSelectBackgroundView<T = any> extends NSView {
    isOpaque<R = boolean>(): R;
    backgroundColor<R = NSColor>(): R;
    setBackgroundColor<R = void, P0 = NSColor>(_v: P0): R;
    strokeColor<R = NSColor>(): R;
    setStrokeColor<R = void, P0 = NSColor>(_v: P0): R;
  }
  namespace classes {
    export interface NSTypeSelectBackgroundView<T = any> extends NSView {
      alloc<R = NSTypeSelectBackgroundView>(): R;
      new: <R = NSTypeSelectBackgroundView>() => R;
    }
  }
}

declare const NSTypeSelectBackgroundView: cocoa.classes.NSTypeSelectBackgroundView;
