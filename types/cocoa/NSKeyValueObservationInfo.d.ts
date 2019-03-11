/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSKeyValueObservationInfo<T = any> extends cocoa.NSObject {
    description<R = unknown>(): R;
    hash<R = number>(): R;
    dealloc<R = void>(): R;
    _initWithObservances_count_hashValue<R = unknown, P0 = unknown, P1 = number, P2 = number>(__initWithObservances: P0, _count: P1, _hashValue: P2): R;
    _copyByAddingObservance<R = unknown, P0 = unknown>(__copyByAddingObservance: P0): R;
  }
  namespace classes {
    export interface NSKeyValueObservationInfo<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSKeyValueObservationInfo>(): R;
      new: <R = NSKeyValueObservationInfo>() => R;
    }
  }
}

declare const NSKeyValueObservationInfo: cocoa.classes.NSKeyValueObservationInfo;
