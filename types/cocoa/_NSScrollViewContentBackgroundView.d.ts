/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSScrollViewContentBackgroundView<T = any> extends cocoa.NSView {
    wantsUpdateLayer<R = boolean>(): R;
    backgroundColor<R = cocoa.NSColor>(): R;
    setBackgroundColor<R = void, P0 = cocoa.NSColor>(_v: P0): R;
  }
  namespace classes {
    export interface _NSScrollViewContentBackgroundView<T = any> extends cocoa.classes.NSView {
      alloc<R = _NSScrollViewContentBackgroundView>(): R;
      new: <R = _NSScrollViewContentBackgroundView>() => R;
    }
  }
}
