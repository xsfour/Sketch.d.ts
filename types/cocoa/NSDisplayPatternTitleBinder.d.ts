/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDisplayPatternTitleBinder<T = any> extends NSDisplayPatternBinder {}
  namespace classes {
    export interface NSDisplayPatternTitleBinder<T = any> extends NSDisplayPatternBinder {
      alloc<R = NSDisplayPatternTitleBinder>(): R;
      new: <R = NSDisplayPatternTitleBinder>() => R;
    }
  }
}

declare const NSDisplayPatternTitleBinder: cocoa.classes.NSDisplayPatternTitleBinder;
