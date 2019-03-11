/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSKeyValueMutableOrderedSet<T = any> extends cocoa.NSMutableOrderedSet, cocoa.NSKeyValueProxyCachingProtocol {
    dealloc<R = void>(): R;
  }
  namespace classes {
    export interface NSKeyValueMutableOrderedSet<T = any> extends cocoa.classes.NSMutableOrderedSet, cocoa.classes.NSKeyValueProxyCachingProtocol {  }
  }
}

declare const NSKeyValueMutableOrderedSet: cocoa.classes.NSKeyValueMutableOrderedSet;
