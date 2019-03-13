/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFilePromiseWriteToken<T = any> extends NSObject {
    dealloc<R = void>(): R;
    logicalURL<R = NSURL>(): R;
    setLogicalURL<R = void, P0 = NSURL>(_v: P0): R;
    promiseURL<R = NSURL>(): R;
    setPromiseURL<R = void, P0 = NSURL>(_v: P0): R;
  }
  namespace classes {
    export interface NSFilePromiseWriteToken<T = any> extends NSObject {
      alloc<R = NSFilePromiseWriteToken>(): R;
      new: <R = NSFilePromiseWriteToken>() => R;
    }
  }
}

declare const NSFilePromiseWriteToken: cocoa.classes.NSFilePromiseWriteToken;
