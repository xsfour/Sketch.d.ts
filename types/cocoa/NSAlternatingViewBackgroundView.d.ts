/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAlternatingViewBackgroundView<T = any> extends cocoa.NSView {}
  namespace classes {
    export interface NSAlternatingViewBackgroundView<T = any> extends cocoa.classes.NSView {
      alloc<R = NSAlternatingViewBackgroundView>(): R;
      new: <R = NSAlternatingViewBackgroundView>() => R;
    }
  }
}

declare const NSAlternatingViewBackgroundView: cocoa.classes.NSAlternatingViewBackgroundView;
