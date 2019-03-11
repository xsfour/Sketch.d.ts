/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSObservationSource<T = any> extends cocoa.NSObject, cocoa.NSObservableProtocol {
    dealloc<R = void>(): R;
    _observerStorageOfSize<R = void, P0 = number>(__observerStorageOfSize: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSObservationSource<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSObservableProtocol {
      alloc<R = NSObservationSource>(): R;
      new: <R = NSObservationSource>() => R;
    }
  }
}

declare const NSObservationSource: cocoa.classes.NSObservationSource;
