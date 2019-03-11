/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSMappingObservation<T = any> extends cocoa._NSConcreteObservation, cocoa.NSObserverProtocol, cocoa.NSObservableProtocol {
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface _NSMappingObservation<T = any> extends cocoa.classes._NSConcreteObservation, cocoa.classes.NSObserverProtocol, cocoa.classes.NSObservableProtocol {
      alloc<R = _NSMappingObservation>(): R;
      new: <R = _NSMappingObservation>() => R;
    }
  }
}
