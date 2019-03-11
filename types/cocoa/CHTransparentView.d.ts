/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface CHTransparentView<T = any> extends cocoa.NSView {
    cxx_destruct<R = void>(): R;
    isOpaque<R = boolean>(): R;
    backgroundColor<R = cocoa.NSColor>(): R;
    setBackgroundColor<R = void, P0 = cocoa.NSColor>(_v: P0): R;
  }
  namespace classes {
    export interface CHTransparentView<T = any> extends cocoa.classes.NSView {
      alloc<R = CHTransparentView>(): R;
      new: <R = CHTransparentView>() => R;
    }
  }
}

declare const CHTransparentView: cocoa.classes.CHTransparentView;
