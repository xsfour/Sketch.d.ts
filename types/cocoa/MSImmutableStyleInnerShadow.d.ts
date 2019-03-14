/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutableStyleInnerShadow<T0 = void, T1 = void, T2 = void> extends _MSImmutableStyleInnerShadow, MSColorUserProtocol {
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSImmutableStyleInnerShadow {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _MSImmutableStyleInnerShadow, MSColorUserProtocol {
      alloc<R = MSImmutableStyleInnerShadow>(): R;
      new: <R = MSImmutableStyleInnerShadow>() => R;
    }
  }
}

declare const MSImmutableStyleInnerShadow: cocoa.MSImmutableStyleInnerShadow.CLASS;
