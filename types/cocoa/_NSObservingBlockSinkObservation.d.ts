/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSObservingBlockSinkObservation<T = any> extends cocoa._NSConcreteBlockSinkObservation, cocoa.NSObserverProtocol {
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface _NSObservingBlockSinkObservation<T = any> extends cocoa.classes._NSConcreteBlockSinkObservation, cocoa.classes.NSObserverProtocol {
      alloc<R = _NSObservingBlockSinkObservation>(): R;
      new: <R = _NSObservingBlockSinkObservation>() => R;
    }
  }
}
