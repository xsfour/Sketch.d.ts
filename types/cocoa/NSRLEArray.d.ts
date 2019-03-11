/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSRLEArray<T = any> extends cocoa.NSObject, cocoa.NSCopyingProtocol, cocoa.NSMutableCopyingProtocol {
    description<R = unknown>(): R;
    count<R = number>(): R;
    objectAtRunIndex_length<R = unknown, P0 = number, P1 = number>(_objectAtRunIndex: P0, _length: P1): R;
    objectAtIndex_effectiveRange_runIndex<R = unknown, P0 = number, P1 = cocoa._NSRange, P2 = number>(_objectAtIndex: P0, _effectiveRange: P1, _runIndex: P2): R;
    objectAtIndex_effectiveRange<R = unknown, P0 = number, P1 = cocoa._NSRange>(_objectAtIndex: P0, _effectiveRange: P1): R;
    _makeNewListFrom<R = void, P0 = cocoa._NSRefCountedRunArray>(__makeNewListFrom: P0): R;
    finalize<R = void>(): R;
    dealloc<R = void>(): R;
    initWithRefCountedRunArray<R = unknown, P0 = cocoa._NSRefCountedRunArray>(_initWithRefCountedRunArray: P0): R;
  }
  namespace classes {
    export interface NSRLEArray<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSCopyingProtocol, cocoa.classes.NSMutableCopyingProtocol {
      alloc<R = NSRLEArray>(): R;
      new: <R = NSRLEArray>() => R;
    }
  }
}

declare const NSRLEArray: cocoa.classes.NSRLEArray;
