/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSKeyValueProxyGetter<T = any> extends cocoa.NSKeyValueGetter {
    proxyClass<R = unknown>(): R;
    initWithContainerClassID_key_proxyClass<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_initWithContainerClassID: P0, _key: P1, _proxyClass: P2): R;
  }
  namespace classes {
    export interface NSKeyValueProxyGetter<T = any> extends cocoa.classes.NSKeyValueGetter {
      alloc<R = NSKeyValueProxyGetter>(): R;
      new: <R = NSKeyValueProxyGetter>() => R;
    }
  }
}

declare const NSKeyValueProxyGetter: cocoa.classes.NSKeyValueProxyGetter;
