/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSFlashView<T = any> extends NSView {}
  namespace classes {
    export interface MSFlashView<T = any> extends NSView {
      alloc<R = MSFlashView>(): R;
      new: <R = MSFlashView>() => R;
    }
  }
}

declare const MSFlashView: cocoa.classes.MSFlashView;
