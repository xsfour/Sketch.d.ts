/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFileAccessSubarbiter<T = any> extends cocoa.NSObject, cocoa.NSFileAccessClientLocalArbiterInterfaceProtocol, cocoa.NSXPCListenerDelegateProtocol {
    stopArbitrating<R = void>(): R;
    dealloc<R = void>(): R;
    initWithQueue_listener<R = unknown, P0 = unknown, P1 = unknown>(_initWithQueue: P0, _listener: P1): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSFileAccessSubarbiter<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSFileAccessClientLocalArbiterInterfaceProtocol, cocoa.classes.NSXPCListenerDelegateProtocol {
      alloc<R = NSFileAccessSubarbiter>(): R;
      new: <R = NSFileAccessSubarbiter>() => R;
    }
  }
}

declare const NSFileAccessSubarbiter: cocoa.classes.NSFileAccessSubarbiter;
