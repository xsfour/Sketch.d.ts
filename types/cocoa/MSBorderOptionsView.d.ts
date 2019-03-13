/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSBorderOptionsView<T = any> extends NSView {}
  namespace classes {
    export interface MSBorderOptionsView<T = any> extends NSView {
      alloc<R = MSBorderOptionsView>(): R;
      new: <R = MSBorderOptionsView>() => R;
    }
  }
}

declare const MSBorderOptionsView: cocoa.classes.MSBorderOptionsView;
