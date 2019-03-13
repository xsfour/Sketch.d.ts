/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSMappingObservation<T = any> extends _NSConcreteObservation, NSObserverProtocol, NSObservableProtocol {
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface _NSMappingObservation<T = any> extends _NSConcreteObservation, NSObserverProtocol, NSObservableProtocol {
      alloc<R = _NSMappingObservation>(): R;
      new: <R = _NSMappingObservation>() => R;
    }
  }
}
