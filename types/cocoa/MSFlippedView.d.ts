/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSFlippedView<T = any> extends cocoa.NSView {
    isFlipped<R = boolean>(): R;
  }
  namespace classes {
    export interface MSFlippedView<T = any> extends cocoa.classes.NSView {
      alloc<R = MSFlippedView>(): R;
      new: <R = MSFlippedView>() => R;
    }
  }
}

declare const MSFlippedView: cocoa.classes.MSFlippedView;
