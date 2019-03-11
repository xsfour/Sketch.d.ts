/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSKeyValueProxyShareKey<T = any> extends cocoa.NSObject, cocoa.NSKeyValueProxyCachingProtocol {}
  namespace classes {
    export interface NSKeyValueProxyShareKey<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSKeyValueProxyCachingProtocol {
      alloc<R = NSKeyValueProxyShareKey>(): R;
      new: <R = NSKeyValueProxyShareKey>() => R;
    }
  }
}

declare const NSKeyValueProxyShareKey: cocoa.classes.NSKeyValueProxyShareKey;
