/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSImageCacheView<T = any> extends NSView {
    isOpaque<R = boolean>(): R;
    isFlipped<R = boolean>(): R;
    bounds<R = CGRect>(): R;
    frame<R = CGRect>(): R;
  }
  namespace classes {
    export interface NSImageCacheView<T = any> extends NSView {
      alloc<R = NSImageCacheView>(): R;
      new: <R = NSImageCacheView>() => R;
    }
  }
}

declare const NSImageCacheView: cocoa.classes.NSImageCacheView;
