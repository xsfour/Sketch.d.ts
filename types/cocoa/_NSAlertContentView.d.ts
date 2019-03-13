/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSAlertContentView<T = any> extends NSView {}
  namespace classes {
    export interface _NSAlertContentView<T = any> extends NSView {
      alloc<R = _NSAlertContentView>(): R;
      new: <R = _NSAlertContentView>() => R;
    }
  }
}
