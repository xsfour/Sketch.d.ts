/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFTPURLHandle<T = any> extends NSURLHandle {
    errorStringForFTPStatusCode_fromURL<R = unknown, P0 = number, P1 = unknown>(_errorStringForFTPStatusCode: P0, _fromURL: P1): R;
    createFTPReadStream<R = __CFReadStream>(): R;
    performStreamRead<R = void>(): R;
    reportStreamError<R = void>(): R;
  }
  namespace classes {
    export interface NSFTPURLHandle<T = any> extends NSURLHandle {
      alloc<R = NSFTPURLHandle>(): R;
      new: <R = NSFTPURLHandle>() => R;
    }
  }
}

declare const NSFTPURLHandle: cocoa.classes.NSFTPURLHandle;
