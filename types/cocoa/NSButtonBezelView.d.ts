/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSButtonBezelView<T = any> extends cocoa.NSWidgetView {}
  namespace classes {
    export interface NSButtonBezelView<T = any> extends cocoa.classes.NSWidgetView {
      alloc<R = NSButtonBezelView>(): R;
      new: <R = NSButtonBezelView>() => R;
    }
  }
}

declare const NSButtonBezelView: cocoa.classes.NSButtonBezelView;
