/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPortDelegateProtocol<T = any> extends NSObjectProtocol {
    handlePortMessage<R = void, P0 = NSPortMessage>(_handlePortMessage: P0): R;
  }
  namespace classes {
    export interface NSPortDelegateProtocol<T = any> extends NSObjectProtocol {  }
  }
}
