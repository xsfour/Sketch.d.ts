/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSXPCListenerDelegateProtocol<T = any> extends cocoa.NSObjectProtocol {
    listener_shouldAcceptNewConnection<R = boolean, P0 = cocoa.NSXPCListener, P1 = cocoa.NSXPCConnection>(_listener: P0, _shouldAcceptNewConnection: P1): R;
  }
  namespace classes {
    export interface NSXPCListenerDelegateProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const NSXPCListenerDelegateProtocol: cocoa.classes.NSXPCListenerDelegateProtocol;
