/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSInputContext<T = any> extends NSTextInputContext {}
  namespace classes {
    export interface NSInputContext<T = any> extends NSTextInputContext {
      alloc<R = NSInputContext>(): R;
      new: <R = NSInputContext>() => R;
    }
  }
}

declare const NSInputContext: cocoa.classes.NSInputContext;
