/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDisplayPatternTitleBinder<T = any> extends cocoa.NSDisplayPatternBinder {}
  namespace classes {
    export interface NSDisplayPatternTitleBinder<T = any> extends cocoa.classes.NSDisplayPatternBinder {
      alloc<R = NSDisplayPatternTitleBinder>(): R;
      new: <R = NSDisplayPatternTitleBinder>() => R;
    }
  }
}

declare const NSDisplayPatternTitleBinder: cocoa.classes.NSDisplayPatternTitleBinder;
