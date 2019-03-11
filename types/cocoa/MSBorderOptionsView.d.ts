/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSBorderOptionsView<T = any> extends cocoa.NSView {}
  namespace classes {
    export interface MSBorderOptionsView<T = any> extends cocoa.classes.NSView {
      alloc<R = MSBorderOptionsView>(): R;
      new: <R = MSBorderOptionsView>() => R;
    }
  }
}

declare const MSBorderOptionsView: cocoa.classes.MSBorderOptionsView;
