/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSLocalInputServer<T = any> extends cocoa.NSInputServer {
    mutableDictionary<R = unknown>(): R;
    setMutableDictionary<R = void, P0 = unknown>(_setMutableDictionary: P0): R;
  }
  namespace classes {
    export interface NSLocalInputServer<T = any> extends cocoa.classes.NSInputServer {
      alloc<R = NSLocalInputServer>(): R;
      new: <R = NSLocalInputServer>() => R;
    }
  }
}

declare const NSLocalInputServer: cocoa.classes.NSLocalInputServer;
