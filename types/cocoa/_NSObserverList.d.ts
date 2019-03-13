/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSObserverList<T = any> extends NSObject {
    cxx_destruct<R = void>(): R;
    description<R = unknown>(): R;
    debugDescription<R = unknown>(): R;
    dealloc<R = void>(): R;
    _receiveBox<R = void, P0 = unknown>(__receiveBox: P0): R;
    removeObservation<R = void, P0 = unknown>(_removeObservation: P0): R;
    removeBlockSink_observation<R = void, P0 = CDUnknownBlockType, P1 = unknown>(_removeBlockSink: P0, _observation: P1): R;
    removeObserver_observation<R = void, P0 = unknown, P1 = unknown>(_removeObserver: P0, _observation: P1): R;
    finishObserving<R = void>(): R;
    addObserver_toObservableObject<R = unknown, P0 = unknown, P1 = unknown>(_addObserver: P0, _toObservableObject: P1): R;
    addBlockSink_toObservableObject_forTag<R = unknown, P0 = CDUnknownBlockType, P1 = unknown, P2 = number>(_addBlockSink: P0, _toObservableObject: P1, _forTag: P2): R;
    _directAddObserver<R = void, P0 = unknown>(__directAddObserver: P0): R;
  }
  namespace classes {
    export interface _NSObserverList<T = any> extends NSObject {
      alloc<R = _NSObserverList>(): R;
      new: <R = _NSObserverList>() => R;
      destroyObserverListForObject<R = void, P0 = unknown>(_destroyObserverListForObject: P0): R;
      _copyObserversOfObject_creatingIfAbsent<R = unknown, P0 = unknown, P1 = boolean>(__copyObserversOfObject: P0, _creatingIfAbsent: P1): R;
    }
  }
}
