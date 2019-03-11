/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSourceListBackgroundView<T = any> extends cocoa.NSView {
    _cuiOptions<R = unknown>(): R;
    isOpaque<R = boolean>(): R;
    wantsUpdateLayer<R = boolean>(): R;
  }
  namespace classes {
    export interface NSSourceListBackgroundView<T = any> extends cocoa.classes.NSView {
      alloc<R = NSSourceListBackgroundView>(): R;
      new: <R = NSSourceListBackgroundView>() => R;
    }
  }
}

declare const NSSourceListBackgroundView: cocoa.classes.NSSourceListBackgroundView;
