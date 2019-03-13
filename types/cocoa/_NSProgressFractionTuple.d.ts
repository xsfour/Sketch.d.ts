/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSProgressFractionTuple<T = any> extends NSObject {
    description<R = unknown>(): R;
    previousIsEqualToNext<R = boolean>(): R;
    dealloc<R = void>(): R;
    next<R = _NSProgressFraction>(): R;
    setNext<R = void, P0 = _NSProgressFraction>(_v: P0): R;
    previous<R = _NSProgressFraction>(): R;
    setPrevious<R = void, P0 = _NSProgressFraction>(_v: P0): R;
  }
  namespace classes {
    export interface _NSProgressFractionTuple<T = any> extends NSObject {
      alloc<R = _NSProgressFractionTuple>(): R;
      new: <R = _NSProgressFractionTuple>() => R;
    }
  }
}
