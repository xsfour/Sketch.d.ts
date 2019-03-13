/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSProgressIndicatorBinder<T = any> extends NSViewStateBinder {}
  namespace classes {
    export interface NSProgressIndicatorBinder<T = any> extends NSViewStateBinder {
      alloc<R = NSProgressIndicatorBinder>(): R;
      new: <R = NSProgressIndicatorBinder>() => R;
    }
  }
}

declare const NSProgressIndicatorBinder: cocoa.classes.NSProgressIndicatorBinder;
