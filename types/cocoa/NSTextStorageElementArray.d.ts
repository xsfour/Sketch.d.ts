/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTextStorageElementArray<T = any> extends cocoa.NSArray {
    objectAtIndex<R = unknown, P0 = number>(_objectAtIndex: P0): R;
    count<R = number>(): R;
    tokenizeToCount<R = void, P0 = number>(_tokenizeToCount: P0): R;
    dealloc<R = void>(): R;
    initWithContainer_key<R = unknown, P0 = unknown, P1 = unknown>(_initWithContainer: P0, _key: P1): R;
  }
  namespace classes {
    export interface NSTextStorageElementArray<T = any> extends cocoa.classes.NSArray {  }
  }
}

declare const NSTextStorageElementArray: cocoa.classes.NSTextStorageElementArray;
