/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSKeyValueNotifyingMutableCollectionGetter<T = any> extends NSKeyValueProxyGetter {
    mutableCollectionGetter<R = unknown>(): R;
    initWithContainerClassID_key_mutableCollectionGetter_proxyClass<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown>(_initWithContainerClassID: P0, _key: P1, _mutableCollectionGetter: P2, _proxyClass: P3): R;
  }
  namespace classes {
    export interface NSKeyValueNotifyingMutableCollectionGetter<T = any> extends NSKeyValueProxyGetter {
      alloc<R = NSKeyValueNotifyingMutableCollectionGetter>(): R;
      new: <R = NSKeyValueNotifyingMutableCollectionGetter>() => R;
    }
  }
}

declare const NSKeyValueNotifyingMutableCollectionGetter: cocoa.classes.NSKeyValueNotifyingMutableCollectionGetter;
