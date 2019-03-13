/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSXPCProxyCreatingProtocol<T = any> {
    remoteObjectProxyWithErrorHandler<R = unknown, P0 = CDUnknownBlockType>(_remoteObjectProxyWithErrorHandler: P0): R;
    remoteObjectProxy<R = unknown>(): R;
    synchronousRemoteObjectProxyWithErrorHandler<R = unknown, P0 = CDUnknownBlockType>(_synchronousRemoteObjectProxyWithErrorHandler: P0): R;
  }
  namespace classes {
    export interface NSXPCProxyCreatingProtocol<T = any> {  }
  }
}
