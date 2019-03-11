/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCondition<T = any> extends cocoa.NSObject, cocoa.NSLockingProtocol {
    description<R = unknown>(): R;
    broadcast<R = void>(): R;
    signal<R = void>(): R;
    waitUntilDate<R = boolean, P0 = unknown>(_waitUntilDate: P0): R;
    wait<R = void>(): R;
    dealloc<R = void>(): R;
    name<R = cocoa.NSString>(): R;
    setName<R = void, P0 = cocoa.NSString>(_v: P0): R;
  }
  namespace classes {
    export interface NSCondition<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSLockingProtocol {
      alloc<R = NSCondition>(): R;
      new: <R = NSCondition>() => R;
      allocWithZone<R = unknown, P0 = cocoa._NSZone>(_allocWithZone: P0): R;
    }
  }
}

declare const NSCondition: cocoa.classes.NSCondition;
