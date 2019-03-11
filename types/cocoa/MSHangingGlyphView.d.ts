/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSHangingGlyphView<T = any> extends cocoa.NSView {
    isFlipped<R = boolean>(): R;
    isOpaque<R = boolean>(): R;
    textView<R = cocoa.NSTextView>(): R;
    setTextView<R = void, P0 = cocoa.NSTextView>(_v: P0): R;
  }
  namespace classes {
    export interface MSHangingGlyphView<T = any> extends cocoa.classes.NSView {
      alloc<R = MSHangingGlyphView>(): R;
      new: <R = MSHangingGlyphView>() => R;
    }
  }
}

declare const MSHangingGlyphView: cocoa.classes.MSHangingGlyphView;
