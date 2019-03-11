/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFileProviderXPCMessenger<T = any> extends cocoa.NSObject, cocoa.NSFileProviderXPCInterfaceProtocol {
    _makeProvider_provideItemAtURL_options_forAccessClaimWithID_processIdentifier_completionHandler<R = void, P0 = unknown, P1 = unknown, P2 = number, P3 = unknown, P4 = number, P5 = cocoa.CDUnknownBlockType>(__makeProvider: P0, _provideItemAtURL: P1, _options: P2, _forAccessClaimWithID: P3, _processIdentifier: P4, _completionHandler: P5): R;
    invalidate<R = void>(): R;
    dealloc<R = void>(): R;
    initWithFileProviderProxy<R = unknown, P0 = unknown>(_initWithFileProviderProxy: P0): R;
    initWithFileProvider_queue<R = unknown, P0 = unknown, P1 = unknown>(_initWithFileProvider: P0, _queue: P1): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSFileProviderXPCMessenger<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSFileProviderXPCInterfaceProtocol {
      alloc<R = NSFileProviderXPCMessenger>(): R;
      new: <R = NSFileProviderXPCMessenger>() => R;
    }
  }
}

declare const NSFileProviderXPCMessenger: cocoa.classes.NSFileProviderXPCMessenger;
