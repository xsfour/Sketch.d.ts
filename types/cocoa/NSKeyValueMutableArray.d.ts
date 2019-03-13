/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSKeyValueMutableArray<T = any> extends NSMutableArray, NSKeyValueProxyCachingProtocol {
    setArray<R = void, P0 = unknown>(_setArray: P0): R;
    dealloc<R = void>(): R;
  }
  namespace classes {
    export interface NSKeyValueMutableArray<T = any> extends NSMutableArray, NSKeyValueProxyCachingProtocol {  }
  }
}

declare const NSKeyValueMutableArray: cocoa.classes.NSKeyValueMutableArray;
