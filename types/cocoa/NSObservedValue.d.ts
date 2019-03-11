/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSObservedValue<T = any> extends cocoa.NSObject {
    copyToHeap<R = unknown>(): R;
    debugDescription<R = unknown>(): R;
    _isToManyChangeInformation<R = boolean>(): R;
    dealloc<R = void>(): R;
    description<R = unknown>(): R;
    finished<R = boolean>(): R;
    setFinished<R = void, P0 = boolean>(_v: P0): R;
    error<R = cocoa.NSError>(): R;
    setError<R = void, P0 = cocoa.NSError>(_v: P0): R;
    value<R = unknown>(): R;
    setValue<R = void, P0 = unknown>(_v: P0): R;
  }
  namespace classes {
    export interface NSObservedValue<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSObservedValue>(): R;
      new: <R = NSObservedValue>() => R;
    }
  }
}

declare const NSObservedValue: cocoa.classes.NSObservedValue;
