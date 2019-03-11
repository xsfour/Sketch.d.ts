/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface CHFlippedView<T = any> extends cocoa.NSView {
    isFlipped<R = boolean>(): R;
  }
  namespace classes {
    export interface CHFlippedView<T = any> extends cocoa.classes.NSView {
      alloc<R = CHFlippedView>(): R;
      new: <R = CHFlippedView>() => R;
    }
  }
}

declare const CHFlippedView: cocoa.classes.CHFlippedView;
