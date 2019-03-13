/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSNavFlippedView<T = any> extends NSView {
    isFlipped<R = boolean>(): R;
    awakeFromNib<R = void>(): R;
  }
  namespace classes {
    export interface NSNavFlippedView<T = any> extends NSView {
      alloc<R = NSNavFlippedView>(): R;
      new: <R = NSNavFlippedView>() => R;
    }
  }
}

declare const NSNavFlippedView: cocoa.classes.NSNavFlippedView;
