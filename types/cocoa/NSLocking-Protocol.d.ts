/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSLockingProtocol<T = any> {
    unlock<R = void>(): R;
    lock<R = void>(): R;
  }
  namespace classes {
    export interface NSLockingProtocol<T = any> {  }
  }
}
