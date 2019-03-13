/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSObservingObservation<T = any> extends _NSConcreteObservation, NSObserverProtocol {
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface _NSObservingObservation<T = any> extends _NSConcreteObservation, NSObserverProtocol {
      alloc<R = _NSObservingObservation>(): R;
      new: <R = _NSObservingObservation>() => R;
    }
  }
}
