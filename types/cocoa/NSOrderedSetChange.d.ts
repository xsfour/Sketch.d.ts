/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSOrderedSetChange<T = any> extends cocoa.NSObject {
    initWithType_sourceIndex_destinationIndex_value<R = unknown, P0 = number, P1 = number, P2 = number, P3 = unknown>(_initWithType: P0, _sourceIndex: P1, _destinationIndex: P2, _value: P3): R;
    value<R = unknown>(): R;
    destinationIndex<R = number>(): R;
    sourceIndex<R = number>(): R;
    changeType<R = number>(): R;
  }
  namespace classes {
    export interface NSOrderedSetChange<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSOrderedSetChange>(): R;
      new: <R = NSOrderedSetChange>() => R;
      allocWithZone<R = unknown, P0 = cocoa._NSZone>(_allocWithZone: P0): R;
    }
  }
}

declare const NSOrderedSetChange: cocoa.classes.NSOrderedSetChange;
