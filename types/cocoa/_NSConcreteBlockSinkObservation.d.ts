/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSConcreteBlockSinkObservation<T = any> extends cocoa.NSObservation {
    dealloc<R = void>(): R;
    _receiveBox<R = void, P0 = unknown>(__receiveBox: P0): R;
    finishObserving<R = void>(): R;
    debugDescription<R = unknown>(): R;
  }
  namespace classes {
    export interface _NSConcreteBlockSinkObservation<T = any> extends cocoa.classes.NSObservation {
      alloc<R = _NSConcreteBlockSinkObservation>(): R;
      new: <R = _NSConcreteBlockSinkObservation>() => R;
    }
  }
}
