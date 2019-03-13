/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSFlippedClipView<T = any> extends NSClipView {}
  namespace classes {
    export interface MSFlippedClipView<T = any> extends NSClipView {
      alloc<R = MSFlippedClipView>(): R;
      new: <R = MSFlippedClipView>() => R;
    }
  }
}

declare const MSFlippedClipView: cocoa.classes.MSFlippedClipView;
