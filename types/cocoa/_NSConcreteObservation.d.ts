/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSConcreteObservation<T = any> extends NSObservation {
    dealloc<R = void>(): R;
    _receiveBox<R = void, P0 = unknown>(__receiveBox: P0): R;
    finishObserving<R = void>(): R;
    debugDescription<R = unknown>(): R;
  }
  namespace classes {
    export interface _NSConcreteObservation<T = any> extends NSObservation {
      alloc<R = _NSConcreteObservation>(): R;
      new: <R = _NSConcreteObservation>() => R;
    }
  }
}
