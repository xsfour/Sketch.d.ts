/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSObservableObservation<T = any> extends _NSConcreteObservation, NSObservableProtocol {
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface _NSObservableObservation<T = any> extends _NSConcreteObservation, NSObservableProtocol {
      alloc<R = _NSObservableObservation>(): R;
      new: <R = _NSObservableObservation>() => R;
    }
  }
}
