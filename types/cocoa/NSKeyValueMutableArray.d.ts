/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSKeyValueMutableArray<T = any> extends cocoa.NSMutableArray, cocoa.NSKeyValueProxyCachingProtocol {
    setArray<R = void, P0 = unknown>(_setArray: P0): R;
    dealloc<R = void>(): R;
  }
  namespace classes {
    export interface NSKeyValueMutableArray<T = any> extends cocoa.classes.NSMutableArray, cocoa.classes.NSKeyValueProxyCachingProtocol {  }
  }
}

declare const NSKeyValueMutableArray: cocoa.classes.NSKeyValueMutableArray;
