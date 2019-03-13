/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSStackObservedValue<T = any> extends NSObservedValue {
    setError<R = void, P0 = unknown>(_setError: P0): R;
    setValue<R = void, P0 = unknown>(_setValue: P0): R;
    setFinished<R = void, P0 = boolean>(_setFinished: P0): R;
  }
  namespace classes {
    export interface NSStackObservedValue<T = any> extends NSObservedValue {
      alloc<R = NSStackObservedValue>(): R;
      new: <R = NSStackObservedValue>() => R;
    }
  }
}

declare const NSStackObservedValue: cocoa.classes.NSStackObservedValue;
