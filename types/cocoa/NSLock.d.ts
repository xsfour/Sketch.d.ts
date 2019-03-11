/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSLock<T = any> extends cocoa.NSObject, cocoa.NSLockingProtocol {
    description<R = unknown>(): R;
    tryLock<R = boolean>(): R;
    lockBeforeDate<R = boolean, P0 = unknown>(_lockBeforeDate: P0): R;
    dealloc<R = void>(): R;
    name<R = cocoa.NSString>(): R;
    setName<R = void, P0 = cocoa.NSString>(_v: P0): R;
  }
  namespace classes {
    export interface NSLock<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSLockingProtocol {
      alloc<R = NSLock>(): R;
      new: <R = NSLock>() => R;
      allocWithZone<R = unknown, P0 = cocoa._NSZone>(_allocWithZone: P0): R;
    }
  }
}

declare const NSLock: cocoa.classes.NSLock;
