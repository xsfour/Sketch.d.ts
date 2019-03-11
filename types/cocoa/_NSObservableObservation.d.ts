/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSObservableObservation<T = any> extends cocoa._NSConcreteObservation, cocoa.NSObservableProtocol {
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface _NSObservableObservation<T = any> extends cocoa.classes._NSConcreteObservation, cocoa.classes.NSObservableProtocol {
      alloc<R = _NSObservableObservation>(): R;
      new: <R = _NSObservableObservation>() => R;
    }
  }
}
