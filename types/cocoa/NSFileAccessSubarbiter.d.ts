/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFileAccessSubarbiter<T = any> extends NSObject, NSFileAccessClientLocalArbiterInterfaceProtocol, NSXPCListenerDelegateProtocol {
    stopArbitrating<R = void>(): R;
    dealloc<R = void>(): R;
    initWithQueue_listener<R = unknown, P0 = unknown, P1 = unknown>(_initWithQueue: P0, _listener: P1): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSFileAccessSubarbiter<T = any> extends NSObject, NSFileAccessClientLocalArbiterInterfaceProtocol, NSXPCListenerDelegateProtocol {
      alloc<R = NSFileAccessSubarbiter>(): R;
      new: <R = NSFileAccessSubarbiter>() => R;
    }
  }
}

declare const NSFileAccessSubarbiter: cocoa.classes.NSFileAccessSubarbiter;
