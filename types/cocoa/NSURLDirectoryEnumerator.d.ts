/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSURLDirectoryEnumerator<T = any> extends cocoa.NSDirectoryEnumerator {
    dealloc<R = void>(): R;
    directoryAttributes<R = unknown>(): R;
    fileAttributes<R = unknown>(): R;
    level<R = number>(): R;
    initWithURL_includingPropertiesForKeys_options_errorHandler<R = unknown, P0 = unknown, P1 = unknown, P2 = number, P3 = cocoa.CDUnknownBlockType>(_initWithURL: P0, _includingPropertiesForKeys: P1, _options: P2, _errorHandler: P3): R;
    errorHandler<R = cocoa.CDUnknownBlockType>(): R;
    setErrorHandler<R = void, P0 = cocoa.CDUnknownBlockType>(_v: P0): R;
  }
  namespace classes {
    export interface NSURLDirectoryEnumerator<T = any> extends cocoa.classes.NSDirectoryEnumerator {  }
  }
}

declare const NSURLDirectoryEnumerator: cocoa.classes.NSURLDirectoryEnumerator;
