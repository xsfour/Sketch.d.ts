/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSObservationSource<T = any> extends NSObject, NSObservableProtocol {
    dealloc<R = void>(): R;
    _observerStorageOfSize<R = void, P0 = number>(__observerStorageOfSize: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSObservationSource<T = any> extends NSObject, NSObservableProtocol {
      alloc<R = NSObservationSource>(): R;
      new: <R = NSObservationSource>() => R;
    }
  }
}

declare const NSObservationSource: cocoa.classes.NSObservationSource;
