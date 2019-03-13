/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSConnectionVersionedProtocolProtocol<T = any> {
    keyedRootObject<R = unknown>(): R;
    rootObject<R = unknown>(): R;
  }
  namespace classes {
    export interface NSConnectionVersionedProtocolProtocol<T = any> {  }
  }
}
