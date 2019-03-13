/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSURLConnectionHandle<T = any> extends NSURLHandle, NSURLConnectionDelegateProtocol {
    connection_didFailLoadingWithError<R = void, P0 = unknown, P1 = unknown>(_connection: P0, _didFailLoadingWithError: P1): R;
    connectionDidFinishLoading<R = void, P0 = unknown>(_connectionDidFinishLoading: P0): R;
    connection_didReceiveData<R = void, P0 = unknown, P1 = unknown>(_connection: P0, _didReceiveData: P1): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSURLConnectionHandle<T = any> extends NSURLHandle, NSURLConnectionDelegateProtocol {
      alloc<R = NSURLConnectionHandle>(): R;
      new: <R = NSURLConnectionHandle>() => R;
    }
  }
}

declare const NSURLConnectionHandle: cocoa.classes.NSURLConnectionHandle;
