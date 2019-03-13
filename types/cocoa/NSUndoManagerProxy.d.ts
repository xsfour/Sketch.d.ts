/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUndoManagerProxy<T = any> extends NSProxy {
    superRelease<R = void>(): R;
    setTargetClass<R = void, P0 = unknown>(_setTargetClass: P0): R;
    initWithManager<R = unknown, P0 = unknown>(_initWithManager: P0): R;
  }
  namespace classes {
    export interface NSUndoManagerProxy<T = any> extends NSProxy {  }
  }
}

declare const NSUndoManagerProxy: cocoa.classes.NSUndoManagerProxy;
