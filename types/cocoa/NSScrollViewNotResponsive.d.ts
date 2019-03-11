/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSScrollViewNotResponsive<T = any> extends cocoa.NSScrollView {}
  namespace classes {
    export interface NSScrollViewNotResponsive<T = any> extends cocoa.classes.NSScrollView {
      alloc<R = NSScrollViewNotResponsive>(): R;
      new: <R = NSScrollViewNotResponsive>() => R;
    }
  }
}

declare const NSScrollViewNotResponsive: cocoa.classes.NSScrollViewNotResponsive;
