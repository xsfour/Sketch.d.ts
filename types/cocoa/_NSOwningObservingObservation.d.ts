/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSOwningObservingObservation<T = any> extends cocoa._NSConcreteObservation, cocoa.NSOwningObserverProtocol {
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface _NSOwningObservingObservation<T = any> extends cocoa.classes._NSConcreteObservation, cocoa.classes.NSOwningObserverProtocol {
      alloc<R = _NSOwningObservingObservation>(): R;
      new: <R = _NSOwningObservingObservation>() => R;
    }
  }
}
