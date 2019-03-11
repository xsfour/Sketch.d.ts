/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUndoManagerProxy<T = any> extends cocoa.NSProxy {
    superRelease<R = void>(): R;
    setTargetClass<R = void, P0 = unknown>(_setTargetClass: P0): R;
    initWithManager<R = unknown, P0 = unknown>(_initWithManager: P0): R;
  }
  namespace classes {
    export interface NSUndoManagerProxy<T = any> extends cocoa.classes.NSProxy {  }
  }
}

declare const NSUndoManagerProxy: cocoa.classes.NSUndoManagerProxy;
