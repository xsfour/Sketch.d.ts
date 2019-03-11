/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSHTTPURLHandle<T = any> extends cocoa.NSURLHandle {
    performStreamRead<R = void>(): R;
    _processHeaders<R = void, P0 = cocoa.__CFHTTPMessage>(__processHeaders: P0): R;
    reportStreamError<R = void>(): R;
    _configureStreamDetails<R = void, P0 = cocoa.__CFReadStream>(__configureStreamDetails: P0): R;
    populateCacheFromStream_data<R = void, P0 = cocoa.__CFReadStream, P1 = unknown>(_populateCacheFromStream: P0, _data: P1): R;
    _URL<R = unknown>(): R;
    _constructRequestForURL_isHead<R = cocoa.__CFHTTPMessage, P0 = unknown, P1 = boolean>(__constructRequestForURL: P0, _isHead: P1): R;
  }
  namespace classes {
    export interface NSHTTPURLHandle<T = any> extends cocoa.classes.NSURLHandle {
      alloc<R = NSHTTPURLHandle>(): R;
      new: <R = NSHTTPURLHandle>() => R;
      canonicalHTTPURLForURL<R = unknown, P0 = unknown>(_canonicalHTTPURLForURL: P0): R;
    }
  }
}

declare const NSHTTPURLHandle: cocoa.classes.NSHTTPURLHandle;
