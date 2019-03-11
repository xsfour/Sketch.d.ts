/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSURLConnectionHandle<T = any> extends cocoa.NSURLHandle, cocoa.NSURLConnectionDelegateProtocol {
    connection_didFailLoadingWithError<R = void, P0 = unknown, P1 = unknown>(_connection: P0, _didFailLoadingWithError: P1): R;
    connectionDidFinishLoading<R = void, P0 = unknown>(_connectionDidFinishLoading: P0): R;
    connection_didReceiveData<R = void, P0 = unknown, P1 = unknown>(_connection: P0, _didReceiveData: P1): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSURLConnectionHandle<T = any> extends cocoa.classes.NSURLHandle, cocoa.classes.NSURLConnectionDelegateProtocol {
      alloc<R = NSURLConnectionHandle>(): R;
      new: <R = NSURLConnectionHandle>() => R;
    }
  }
}

declare const NSURLConnectionHandle: cocoa.classes.NSURLConnectionHandle;
