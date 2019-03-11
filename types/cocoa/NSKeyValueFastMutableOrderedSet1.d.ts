/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSKeyValueFastMutableOrderedSet1<T = any> extends cocoa.NSKeyValueFastMutableOrderedSet {
    objectsAtIndexes<R = unknown, P0 = unknown>(_objectsAtIndexes: P0): R;
    objectAtIndex<R = unknown, P0 = number>(_objectAtIndex: P0): R;
    indexOfObject<R = number, P0 = unknown>(_indexOfObject: P0): R;
    getObjects_range<R = void, P0 = unknown, P1 = cocoa._NSRange>(_getObjects: P0, _range: P1): R;
    count<R = number>(): R;
  }
  namespace classes {
    export interface NSKeyValueFastMutableOrderedSet1<T = any> extends cocoa.classes.NSKeyValueFastMutableOrderedSet {  }
  }
}

declare const NSKeyValueFastMutableOrderedSet1: cocoa.classes.NSKeyValueFastMutableOrderedSet1;
