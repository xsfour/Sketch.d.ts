/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSImageCacheView<T = any> extends cocoa.NSView {
    isOpaque<R = boolean>(): R;
    isFlipped<R = boolean>(): R;
    bounds<R = cocoa.CGRect>(): R;
    frame<R = cocoa.CGRect>(): R;
  }
  namespace classes {
    export interface NSImageCacheView<T = any> extends cocoa.classes.NSView {
      alloc<R = NSImageCacheView>(): R;
      new: <R = NSImageCacheView>() => R;
    }
  }
}

declare const NSImageCacheView: cocoa.classes.NSImageCacheView;
