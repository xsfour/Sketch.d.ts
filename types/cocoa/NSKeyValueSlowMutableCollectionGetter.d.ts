/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSKeyValueSlowMutableCollectionGetter<T = any> extends NSKeyValueProxyGetter {
    treatNilValuesLikeEmptyCollections<R = boolean>(): R;
    baseSetter<R = unknown>(): R;
    baseGetter<R = unknown>(): R;
    initWithContainerClassID_key_baseGetter_baseSetter_containerIsa_proxyClass<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown, P4 = unknown, P5 = unknown>(_initWithContainerClassID: P0, _key: P1, _baseGetter: P2, _baseSetter: P3, _containerIsa: P4, _proxyClass: P5): R;
  }
  namespace classes {
    export interface NSKeyValueSlowMutableCollectionGetter<T = any> extends NSKeyValueProxyGetter {
      alloc<R = NSKeyValueSlowMutableCollectionGetter>(): R;
      new: <R = NSKeyValueSlowMutableCollectionGetter>() => R;
    }
  }
}

declare const NSKeyValueSlowMutableCollectionGetter: cocoa.classes.NSKeyValueSlowMutableCollectionGetter;
