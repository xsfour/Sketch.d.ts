/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSKeyValueArray<T = any> extends cocoa.NSArray, cocoa.NSKeyValueProxyCachingProtocol {
    objectsAtIndexes<R = unknown, P0 = unknown>(_objectsAtIndexes: P0): R;
    objectAtIndex<R = unknown, P0 = number>(_objectAtIndex: P0): R;
    getObjects_range<R = void, P0 = unknown, P1 = cocoa._NSRange>(_getObjects: P0, _range: P1): R;
    count<R = number>(): R;
    dealloc<R = void>(): R;
  }
  namespace classes {
    export interface NSKeyValueArray<T = any> extends cocoa.classes.NSArray, cocoa.classes.NSKeyValueProxyCachingProtocol {  }
  }
}

declare const NSKeyValueArray: cocoa.classes.NSKeyValueArray;
