/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTreeDetailBinder<T = any> extends cocoa.NSArrayDetailBinder {}
  namespace classes {
    export interface NSTreeDetailBinder<T = any> extends cocoa.classes.NSArrayDetailBinder {
      alloc<R = NSTreeDetailBinder>(): R;
      new: <R = NSTreeDetailBinder>() => R;
    }
  }
}

declare const NSTreeDetailBinder: cocoa.classes.NSTreeDetailBinder;
