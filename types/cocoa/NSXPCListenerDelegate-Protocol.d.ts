/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSXPCListenerDelegateProtocol<T = any> extends NSObjectProtocol {
    listener_shouldAcceptNewConnection<R = boolean, P0 = NSXPCListener, P1 = NSXPCConnection>(_listener: P0, _shouldAcceptNewConnection: P1): R;
  }
  namespace classes {
    export interface NSXPCListenerDelegateProtocol<T = any> extends NSObjectProtocol {  }
  }
}
