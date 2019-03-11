/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPlaceholderNumber<T = any> extends cocoa.NSPlaceholderValue {}
  namespace classes {
    export interface NSPlaceholderNumber<T = any> extends cocoa.classes.NSPlaceholderValue {
      alloc<R = NSPlaceholderNumber>(): R;
      new: <R = NSPlaceholderNumber>() => R;
    }
  }
}

declare const NSPlaceholderNumber: cocoa.classes.NSPlaceholderNumber;
