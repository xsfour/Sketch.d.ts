/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSStyleShadow<T = any> extends cocoa._MSStyleShadow, cocoa.MSColorConvertibleProtocol {
    CSSAttributeString<R = unknown>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSStyleShadow<T = any> extends cocoa.classes._MSStyleShadow, cocoa.classes.MSColorConvertibleProtocol {
      alloc<R = MSStyleShadow>(): R;
      new: <R = MSStyleShadow>() => R;
    }
  }
}

declare const MSStyleShadow: cocoa.classes.MSStyleShadow;
