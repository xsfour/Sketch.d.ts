/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSKeyValueProxyCachingProtocol<T = any> {
    _proxyNonGCFinalize<R = void>(): R;
    _proxyInitWithContainer_getter<R = unknown, P0 = cocoa.NSObject, P1 = unknown>(__proxyInitWithContainer: P0, _getter: P1): R;
    _proxyLocator<R = unknown>(): R;
  }
  namespace classes {
    export interface NSKeyValueProxyCachingProtocol<T = any> {
      _proxyShare<R = cocoa.NSHashTable>(): R;
    }
  }
}

declare const NSKeyValueProxyCachingProtocol: cocoa.classes.NSKeyValueProxyCachingProtocol;
