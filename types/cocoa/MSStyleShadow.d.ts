/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSStyleShadow<T = any> extends _MSStyleShadow, MSColorConvertibleProtocol {
    CSSAttributeString<R = unknown>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSStyleShadow<T = any> extends _MSStyleShadow, MSColorConvertibleProtocol {
      alloc<R = MSStyleShadow>(): R;
      new: <R = MSStyleShadow>() => R;
    }
  }
}

declare const MSStyleShadow: cocoa.classes.MSStyleShadow;
