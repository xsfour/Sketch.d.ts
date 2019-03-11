/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSHMDDisplayLink<T = any> extends cocoa.NSObject {
    resume<R = void>(): R;
    suspend<R = void>(): R;
    invalidate<R = void>(): R;
    valid<R = boolean>(): R;
    executesConcurrently<R = boolean>(): R;
    setExecutesConcurrently<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace classes {
    export interface NSHMDDisplayLink<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSHMDDisplayLink>(): R;
      new: <R = NSHMDDisplayLink>() => R;
      currentTimestamp<R = number>(): R;
    }
  }
}

declare const NSHMDDisplayLink: cocoa.classes.NSHMDDisplayLink;
