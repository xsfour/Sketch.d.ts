/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutableStyleInnerShadow<T = any> extends _MSImmutableStyleInnerShadow, MSColorUserProtocol {
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSImmutableStyleInnerShadow<T = any> extends _MSImmutableStyleInnerShadow, MSColorUserProtocol {
      alloc<R = MSImmutableStyleInnerShadow>(): R;
      new: <R = MSImmutableStyleInnerShadow>() => R;
    }
  }
}

declare const MSImmutableStyleInnerShadow: cocoa.classes.MSImmutableStyleInnerShadow;
