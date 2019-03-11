/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSXPCProxyCreatingProtocol<T = any> {
    remoteObjectProxyWithErrorHandler<R = unknown, P0 = cocoa.CDUnknownBlockType>(_remoteObjectProxyWithErrorHandler: P0): R;
    remoteObjectProxy<R = unknown>(): R;
    synchronousRemoteObjectProxyWithErrorHandler<R = unknown, P0 = cocoa.CDUnknownBlockType>(_synchronousRemoteObjectProxyWithErrorHandler: P0): R;
  }
  namespace classes {
    export interface NSXPCProxyCreatingProtocol<T = any> {  }
  }
}

declare const NSXPCProxyCreatingProtocol: cocoa.classes.NSXPCProxyCreatingProtocol;
