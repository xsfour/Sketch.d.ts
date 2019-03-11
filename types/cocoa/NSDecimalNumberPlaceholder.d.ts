/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDecimalNumberPlaceholder<T = any> extends cocoa.NSDecimalNumber {}
  namespace classes {
    export interface NSDecimalNumberPlaceholder<T = any> extends cocoa.classes.NSDecimalNumber {
      alloc<R = NSDecimalNumberPlaceholder>(): R;
      new: <R = NSDecimalNumberPlaceholder>() => R;
    }
  }
}

declare const NSDecimalNumberPlaceholder: cocoa.classes.NSDecimalNumberPlaceholder;
