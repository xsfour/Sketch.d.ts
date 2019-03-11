/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSArrayDiff<T = any> extends cocoa.NSObject {
    description<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithPreviousObjects_currentObjects<R = unknown, P0 = unknown, P1 = unknown>(_initWithPreviousObjects: P0, _currentObjects: P1): R;
    movedObjectIndexes<R = cocoa.NSSet>(): R;
    insertedObjectIndexes<R = cocoa.NSIndexSet>(): R;
    removedObjectIndexes<R = cocoa.NSIndexSet>(): R;
    empty<R = boolean>(): R;
  }
  namespace classes {
    export interface NSArrayDiff<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSArrayDiff>(): R;
      new: <R = NSArrayDiff>() => R;
    }
  }
}

declare const NSArrayDiff: cocoa.classes.NSArrayDiff;
