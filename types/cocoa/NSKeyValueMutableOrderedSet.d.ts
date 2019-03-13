/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSKeyValueMutableOrderedSet<T = any> extends NSMutableOrderedSet, NSKeyValueProxyCachingProtocol {
    dealloc<R = void>(): R;
  }
  namespace classes {
    export interface NSKeyValueMutableOrderedSet<T = any> extends NSMutableOrderedSet, NSKeyValueProxyCachingProtocol {  }
  }
}

declare const NSKeyValueMutableOrderedSet: cocoa.classes.NSKeyValueMutableOrderedSet;
