/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFilePromiseWriteToken<T = any> extends cocoa.NSObject {
    dealloc<R = void>(): R;
    logicalURL<R = cocoa.NSURL>(): R;
    setLogicalURL<R = void, P0 = cocoa.NSURL>(_v: P0): R;
    promiseURL<R = cocoa.NSURL>(): R;
    setPromiseURL<R = void, P0 = cocoa.NSURL>(_v: P0): R;
  }
  namespace classes {
    export interface NSFilePromiseWriteToken<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSFilePromiseWriteToken>(): R;
      new: <R = NSFilePromiseWriteToken>() => R;
    }
  }
}

declare const NSFilePromiseWriteToken: cocoa.classes.NSFilePromiseWriteToken;
