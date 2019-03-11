/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFileProviderMessenger<T = any> extends cocoa.NSObject {
    invalidate<R = void>(): R;
    remoteObjectProxyWithErrorHandler<R = unknown, P0 = cocoa.CDUnknownBlockType>(_remoteObjectProxyWithErrorHandler: P0): R;
    initWithInterface_protocol<R = unknown, P0 = unknown, P1 = unknown>(_initWithInterface: P0, _protocol: P1): R;
    dealloc<R = void>(): R;
  }
  namespace classes {
    export interface NSFileProviderMessenger<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSFileProviderMessenger>(): R;
      new: <R = NSFileProviderMessenger>() => R;
    }
  }
}

declare const NSFileProviderMessenger: cocoa.classes.NSFileProviderMessenger;
