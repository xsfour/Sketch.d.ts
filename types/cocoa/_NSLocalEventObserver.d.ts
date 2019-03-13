/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSLocalEventObserver<T = any> extends _NSEventObserver {
    recomputeObserverMask<R = void>(): R;
  }
  namespace classes {
    export interface _NSLocalEventObserver<T = any> extends _NSEventObserver {
      alloc<R = _NSLocalEventObserver>(): R;
      new: <R = _NSLocalEventObserver>() => R;
      initialize<R = void>(): R;
    }
  }
}
