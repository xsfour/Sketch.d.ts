/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSScrollViewContentBackgroundView<T = any> extends NSView {
    wantsUpdateLayer<R = boolean>(): R;
    backgroundColor<R = NSColor>(): R;
    setBackgroundColor<R = void, P0 = NSColor>(_v: P0): R;
  }
  namespace classes {
    export interface _NSScrollViewContentBackgroundView<T = any> extends NSView {
      alloc<R = _NSScrollViewContentBackgroundView>(): R;
      new: <R = _NSScrollViewContentBackgroundView>() => R;
    }
  }
}
