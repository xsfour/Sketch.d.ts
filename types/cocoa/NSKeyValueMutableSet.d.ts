/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSKeyValueMutableSet<T = any> extends NSMutableSet, NSKeyValueProxyCachingProtocol {
    dealloc<R = void>(): R;
  }
  namespace classes {
    export interface NSKeyValueMutableSet<T = any> extends NSMutableSet, NSKeyValueProxyCachingProtocol {  }
  }
}

declare const NSKeyValueMutableSet: cocoa.classes.NSKeyValueMutableSet;
