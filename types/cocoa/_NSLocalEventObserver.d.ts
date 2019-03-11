/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSLocalEventObserver<T = any> extends cocoa._NSEventObserver {
    recomputeObserverMask<R = void>(): R;
  }
  namespace classes {
    export interface _NSLocalEventObserver<T = any> extends cocoa.classes._NSEventObserver {
      alloc<R = _NSLocalEventObserver>(): R;
      new: <R = _NSLocalEventObserver>() => R;
      initialize<R = void>(): R;
    }
  }
}
