/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSKeyValueFastMutableCollection2Getter<T = any> extends cocoa.NSKeyValueProxyGetter {
    mutatingMethods<R = unknown>(): R;
    baseGetter<R = unknown>(): R;
    initWithContainerClassID_key_baseGetter_mutatingMethods_proxyClass<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown, P4 = unknown>(_initWithContainerClassID: P0, _key: P1, _baseGetter: P2, _mutatingMethods: P3, _proxyClass: P4): R;
  }
  namespace classes {
    export interface NSKeyValueFastMutableCollection2Getter<T = any> extends cocoa.classes.NSKeyValueProxyGetter {
      alloc<R = NSKeyValueFastMutableCollection2Getter>(): R;
      new: <R = NSKeyValueFastMutableCollection2Getter>() => R;
    }
  }
}

declare const NSKeyValueFastMutableCollection2Getter: cocoa.classes.NSKeyValueFastMutableCollection2Getter;
