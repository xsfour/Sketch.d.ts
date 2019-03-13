/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSBuiltinCharacterSet<T = any> extends NSCharacterSet {}
  namespace classes {
    export interface NSBuiltinCharacterSet<T = any> extends NSCharacterSet {
      alloc<R = NSBuiltinCharacterSet>(): R;
      new: <R = NSBuiltinCharacterSet>() => R;
    }
  }
}

declare const NSBuiltinCharacterSet: cocoa.classes.NSBuiltinCharacterSet;
