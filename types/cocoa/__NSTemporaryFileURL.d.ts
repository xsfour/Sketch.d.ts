/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface __NSTemporaryFileURL<T = any> extends cocoa.NSObject {
    dealloc<R = void>(): R;
    initWithData_filename<R = unknown, P0 = unknown, P1 = unknown>(_initWithData: P0, _filename: P1): R;
    url<R = cocoa.NSURL>(): R;
  }
  namespace classes {
    export interface __NSTemporaryFileURL<T = any> extends cocoa.classes.NSObject {
      alloc<R = __NSTemporaryFileURL>(): R;
      new: <R = __NSTemporaryFileURL>() => R;
    }
  }
}
