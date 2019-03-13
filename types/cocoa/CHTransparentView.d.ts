/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface CHTransparentView<T = any> extends NSView {
    cxx_destruct<R = void>(): R;
    isOpaque<R = boolean>(): R;
    backgroundColor<R = NSColor>(): R;
    setBackgroundColor<R = void, P0 = NSColor>(_v: P0): R;
  }
  namespace classes {
    export interface CHTransparentView<T = any> extends NSView {
      alloc<R = CHTransparentView>(): R;
      new: <R = CHTransparentView>() => R;
    }
  }
}

declare const CHTransparentView: cocoa.classes.CHTransparentView;
