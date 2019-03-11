/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCCrypto<T = any> extends cocoa.NSObject {}
  namespace classes {
    export interface BCCrypto<T = any> extends cocoa.classes.NSObject {
      alloc<R = BCCrypto>(): R;
      new: <R = BCCrypto>() => R;
    }
  }
}

declare const BCCrypto: cocoa.classes.BCCrypto;
