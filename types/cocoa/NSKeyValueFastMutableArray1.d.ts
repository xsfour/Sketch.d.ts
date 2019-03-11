/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSKeyValueFastMutableArray1<T = any> extends cocoa.NSKeyValueFastMutableArray {
    objectsAtIndexes<R = unknown, P0 = unknown>(_objectsAtIndexes: P0): R;
    objectAtIndex<R = unknown, P0 = number>(_objectAtIndex: P0): R;
    getObjects_range<R = void, P0 = unknown, P1 = cocoa._NSRange>(_getObjects: P0, _range: P1): R;
    count<R = number>(): R;
  }
  namespace classes {
    export interface NSKeyValueFastMutableArray1<T = any> extends cocoa.classes.NSKeyValueFastMutableArray {  }
  }
}

declare const NSKeyValueFastMutableArray1: cocoa.classes.NSKeyValueFastMutableArray1;
