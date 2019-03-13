/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSObservableProtocol<T = any> extends NSObjectProtocol {
    finishObserving<R = void>(): R;
    receiveObservedError<R = void, P0 = NSError>(_receiveObservedError: P0): R;
    receiveObservedValue<R = void, P0 = unknown>(_receiveObservedValue: P0): R;
    removeObservation<R = void, P0 = NSObservation>(_removeObservation: P0): R;
    NSObserver<R = NSObservable>(): R;
  }
  namespace classes {
    export interface NSObservableProtocol<T = any> extends NSObjectProtocol {  }
  }
}
