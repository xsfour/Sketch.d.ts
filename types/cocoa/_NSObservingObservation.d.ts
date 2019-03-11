/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSObservingObservation<T = any> extends cocoa._NSConcreteObservation, cocoa.NSObserverProtocol {
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface _NSObservingObservation<T = any> extends cocoa.classes._NSConcreteObservation, cocoa.classes.NSObserverProtocol {
      alloc<R = _NSObservingObservation>(): R;
      new: <R = _NSObservingObservation>() => R;
    }
  }
}
