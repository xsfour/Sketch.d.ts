/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDoubleClickActionBinder<T = any> extends NSActionBinder {}
  namespace classes {
    export interface NSDoubleClickActionBinder<T = any> extends NSActionBinder {
      alloc<R = NSDoubleClickActionBinder>(): R;
      new: <R = NSDoubleClickActionBinder>() => R;
    }
  }
}

declare const NSDoubleClickActionBinder: cocoa.classes.NSDoubleClickActionBinder;
