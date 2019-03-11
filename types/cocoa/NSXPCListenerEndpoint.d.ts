/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSXPCListenerEndpoint<T = any> extends cocoa.NSObject, cocoa.NSSecureCodingProtocol {
    _setEndpoint<R = void, P0 = unknown>(__setEndpoint: P0): R;
    _endpoint<R = unknown>(): R;
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    dealloc<R = void>(): R;
    _initWithConnection<R = unknown, P0 = unknown>(__initWithConnection: P0): R;
  }
  namespace classes {
    export interface NSXPCListenerEndpoint<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSSecureCodingProtocol {
      alloc<R = NSXPCListenerEndpoint>(): R;
      new: <R = NSXPCListenerEndpoint>() => R;
    }
  }
}

declare const NSXPCListenerEndpoint: cocoa.classes.NSXPCListenerEndpoint;
