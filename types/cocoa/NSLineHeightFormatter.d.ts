/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSLineHeightFormatter<T = any> extends NSFormatter {}
  namespace classes {
    export interface NSLineHeightFormatter<T = any> extends NSFormatter {
      alloc<R = NSLineHeightFormatter>(): R;
      new: <R = NSLineHeightFormatter>() => R;
    }
  }
}

declare const NSLineHeightFormatter: cocoa.classes.NSLineHeightFormatter;
