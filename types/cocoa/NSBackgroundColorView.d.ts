/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSBackgroundColorView<T = any> extends cocoa.NSView {
    _preferredAppearance<R = unknown>(): R;
    wantsUpdateLayer<R = boolean>(): R;
    backgroundColor<R = cocoa.NSColor>(): R;
    setBackgroundColor<R = void, P0 = cocoa.NSColor>(_v: P0): R;
  }
  namespace classes {
    export interface NSBackgroundColorView<T = any> extends cocoa.classes.NSView {
      alloc<R = NSBackgroundColorView>(): R;
      new: <R = NSBackgroundColorView>() => R;
    }
  }
}

declare const NSBackgroundColorView: cocoa.classes.NSBackgroundColorView;
