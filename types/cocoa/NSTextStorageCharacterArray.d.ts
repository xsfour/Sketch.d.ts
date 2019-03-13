/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTextStorageCharacterArray<T = any> extends NSArray {
    objectAtIndex<R = unknown, P0 = number>(_objectAtIndex: P0): R;
    count<R = number>(): R;
    dealloc<R = void>(): R;
    initWithContainer<R = unknown, P0 = unknown>(_initWithContainer: P0): R;
  }
  namespace classes {
    export interface NSTextStorageCharacterArray<T = any> extends NSArray {  }
  }
}

declare const NSTextStorageCharacterArray: cocoa.classes.NSTextStorageCharacterArray;
