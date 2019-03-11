/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSOwningMappingObservation<T = any> extends cocoa._NSConcreteObservation, cocoa.NSOwningObserverProtocol, cocoa.NSObservableProtocol {
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface _NSOwningMappingObservation<T = any> extends cocoa.classes._NSConcreteObservation, cocoa.classes.NSOwningObserverProtocol, cocoa.classes.NSObservableProtocol {
      alloc<R = _NSOwningMappingObservation>(): R;
      new: <R = _NSOwningMappingObservation>() => R;
    }
  }
}
