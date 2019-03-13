/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSButtonBezelView<T = any> extends NSWidgetView {}
  namespace classes {
    export interface NSButtonBezelView<T = any> extends NSWidgetView {
      alloc<R = NSButtonBezelView>(): R;
      new: <R = NSButtonBezelView>() => R;
    }
  }
}

declare const NSButtonBezelView: cocoa.classes.NSButtonBezelView;
