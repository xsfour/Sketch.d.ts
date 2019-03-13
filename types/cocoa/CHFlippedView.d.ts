/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface CHFlippedView<T = any> extends NSView {
    isFlipped<R = boolean>(): R;
  }
  namespace classes {
    export interface CHFlippedView<T = any> extends NSView {
      alloc<R = CHFlippedView>(): R;
      new: <R = CHFlippedView>() => R;
    }
  }
}

declare const CHFlippedView: cocoa.classes.CHFlippedView;
