/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSObservableProtocol<T = any> extends cocoa.NSObjectProtocol {
    finishObserving<R = void>(): R;
    receiveObservedError<R = void, P0 = cocoa.NSError>(_receiveObservedError: P0): R;
    receiveObservedValue<R = void, P0 = unknown>(_receiveObservedValue: P0): R;
    removeObservation<R = void, P0 = cocoa.NSObservation>(_removeObservation: P0): R;
    NSObserver<R = cocoa.NSObservable>(): R;
  }
  namespace classes {
    export interface NSObservableProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const NSObservableProtocol: cocoa.classes.NSObservableProtocol;
