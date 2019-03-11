/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSAlertContentView<T = any> extends cocoa.NSView {}
  namespace classes {
    export interface _NSAlertContentView<T = any> extends cocoa.classes.NSView {
      alloc<R = _NSAlertContentView>(): R;
      new: <R = _NSAlertContentView>() => R;
    }
  }
}
