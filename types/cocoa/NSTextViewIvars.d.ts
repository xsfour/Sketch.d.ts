/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTextViewIvars<T = any> extends NSObject {}
  namespace classes {
    export interface NSTextViewIvars<T = any> extends NSObject {
      alloc<R = NSTextViewIvars>(): R;
      new: <R = NSTextViewIvars>() => R;
    }
  }
}

declare const NSTextViewIvars: cocoa.classes.NSTextViewIvars;
