/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSKeyValueCollectionGetter<T = any> extends cocoa.NSKeyValueProxyGetter {
    methods<R = unknown>(): R;
    initWithContainerClassID_key_methods_proxyClass<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown>(_initWithContainerClassID: P0, _key: P1, _methods: P2, _proxyClass: P3): R;
  }
  namespace classes {
    export interface NSKeyValueCollectionGetter<T = any> extends cocoa.classes.NSKeyValueProxyGetter {
      alloc<R = NSKeyValueCollectionGetter>(): R;
      new: <R = NSKeyValueCollectionGetter>() => R;
    }
  }
}

declare const NSKeyValueCollectionGetter: cocoa.classes.NSKeyValueCollectionGetter;
