/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDistributedLock<T = any> extends cocoa.NSObject {
    description<R = unknown>(): R;
    breakLock<R = void>(): R;
    unlock<R = void>(): R;
    tryLock<R = boolean>(): R;
    dealloc<R = void>(): R;
    invalidate<R = void>(): R;
    initWithPath<R = unknown, P0 = unknown>(_initWithPath: P0): R;
    lockDate<R = cocoa.NSDate>(): R;
  }
  namespace classes {
    export interface NSDistributedLock<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSDistributedLock>(): R;
      new: <R = NSDistributedLock>() => R;
      lockWithPath<R = unknown, P0 = unknown>(_lockWithPath: P0): R;
    }
  }
}

declare const NSDistributedLock: cocoa.classes.NSDistributedLock;
