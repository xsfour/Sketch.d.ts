/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDimingView<T = any> extends NSView {}
  namespace classes {
    export interface NSDimingView<T = any> extends NSView {
      alloc<R = NSDimingView>(): R;
      new: <R = NSDimingView>() => R;
    }
  }
}

declare const NSDimingView: cocoa.classes.NSDimingView;
