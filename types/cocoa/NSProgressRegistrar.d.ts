/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSProgressRegistrar<T = any> extends cocoa.NSObject, cocoa.NSXPCListenerDelegateProtocol, cocoa.NSProgressRegistrarProtocol {
    _getRemoteProcessWithAuditToken_canReadItemAtURL_completionHandler<R = void, P0 = unknown, P1 = unknown, P2 = cocoa.CDUnknownBlockType>(__getRemoteProcessWithAuditToken: P0, _canReadItemAtURL: P1, _completionHandler: P2): R;
    dealloc<R = void>(): R;
    initWithQueue_rootFileAccessNode<R = unknown, P0 = unknown, P1 = unknown>(_initWithQueue: P0, _rootFileAccessNode: P1): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSProgressRegistrar<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSXPCListenerDelegateProtocol, cocoa.classes.NSProgressRegistrarProtocol {
      alloc<R = NSProgressRegistrar>(): R;
      new: <R = NSProgressRegistrar>() => R;
    }
  }
}

declare const NSProgressRegistrar: cocoa.classes.NSProgressRegistrar;
