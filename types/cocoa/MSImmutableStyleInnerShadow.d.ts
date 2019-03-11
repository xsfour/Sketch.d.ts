/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutableStyleInnerShadow<T = any> extends cocoa._MSImmutableStyleInnerShadow, cocoa.MSColorUserProtocol {
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSImmutableStyleInnerShadow<T = any> extends cocoa.classes._MSImmutableStyleInnerShadow, cocoa.classes.MSColorUserProtocol {
      alloc<R = MSImmutableStyleInnerShadow>(): R;
      new: <R = MSImmutableStyleInnerShadow>() => R;
    }
  }
}

declare const MSImmutableStyleInnerShadow: cocoa.classes.MSImmutableStyleInnerShadow;
