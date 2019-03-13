/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSRemoteInputServer<T = any> extends NSInputServer {
    forwardInvocation<R = void, P0 = unknown>(_forwardInvocation: P0): R;
    _invalidateConnectionsAsNecessary<R = void, P0 = unknown>(__invalidateConnectionsAsNecessary: P0): R;
  }
  namespace classes {
    export interface NSRemoteInputServer<T = any> extends NSInputServer {
      alloc<R = NSRemoteInputServer>(): R;
      new: <R = NSRemoteInputServer>() => R;
    }
  }
}

declare const NSRemoteInputServer: cocoa.classes.NSRemoteInputServer;
