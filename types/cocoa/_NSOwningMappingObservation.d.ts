/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSOwningMappingObservation<T = any> extends _NSConcreteObservation, NSOwningObserverProtocol, NSObservableProtocol {
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface _NSOwningMappingObservation<T = any> extends _NSConcreteObservation, NSOwningObserverProtocol, NSObservableProtocol {
      alloc<R = _NSOwningMappingObservation>(): R;
      new: <R = _NSOwningMappingObservation>() => R;
    }
  }
}
