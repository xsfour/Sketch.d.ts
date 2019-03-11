/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSKeyValueMutableSet<T = any> extends cocoa.NSMutableSet, cocoa.NSKeyValueProxyCachingProtocol {
    dealloc<R = void>(): R;
  }
  namespace classes {
    export interface NSKeyValueMutableSet<T = any> extends cocoa.classes.NSMutableSet, cocoa.classes.NSKeyValueProxyCachingProtocol {  }
  }
}

declare const NSKeyValueMutableSet: cocoa.classes.NSKeyValueMutableSet;
