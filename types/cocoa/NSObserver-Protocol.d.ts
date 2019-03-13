/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSObserverProtocol<T = any> extends NSObjectProtocol {
    finishObserving<R = void>(): R;
    receiveObservedError<R = void, P0 = NSError>(_receiveObservedError: P0): R;
    receiveObservedValue<R = void, P0 = unknown>(_receiveObservedValue: P0): R;
  }
  namespace classes {
    export interface NSObserverProtocol<T = any> extends NSObjectProtocol {  }
  }
}
