/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSMutableRLEArray<T = any> extends cocoa.NSRLEArray {
    deleteObjectsInRange<R = void, P0 = cocoa._NSRange>(_deleteObjectsInRange: P0): R;
    replaceObjectsInRange_withObject_length<R = void, P0 = cocoa._NSRange, P1 = unknown, P2 = number>(_replaceObjectsInRange: P0, _withObject: P1, _length: P2): R;
    insertObject_range<R = void, P0 = unknown, P1 = cocoa._NSRange>(_insertObject: P0, _range: P1): R;
    _setBlockCapacity<R = void, P0 = number>(__setBlockCapacity: P0): R;
  }
  namespace classes {
    export interface NSMutableRLEArray<T = any> extends cocoa.classes.NSRLEArray {
      alloc<R = NSMutableRLEArray>(): R;
      new: <R = NSMutableRLEArray>() => R;
    }
  }
}

declare const NSMutableRLEArray: cocoa.classes.NSMutableRLEArray;
