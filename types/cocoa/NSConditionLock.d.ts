/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSConditionLock<T = any> extends cocoa.NSObject, cocoa.NSLockingProtocol {
    description<R = unknown>(): R;
    unlockWithCondition<R = void, P0 = number>(_unlockWithCondition: P0): R;
    tryLockWhenCondition<R = boolean, P0 = number>(_tryLockWhenCondition: P0): R;
    tryLock<R = boolean>(): R;
    lockWhenCondition_beforeDate<R = boolean, P0 = number, P1 = unknown>(_lockWhenCondition: P0, _beforeDate: P1): R;
    lockWhenCondition<R = void, P0 = number>(_lockWhenCondition: P0): R;
    lockBeforeDate<R = boolean, P0 = unknown>(_lockBeforeDate: P0): R;
    dealloc<R = void>(): R;
    initWithCondition<R = unknown, P0 = number>(_initWithCondition: P0): R;
    name<R = cocoa.NSString>(): R;
    setName<R = void, P0 = cocoa.NSString>(_v: P0): R;
    condition<R = number>(): R;
  }
  namespace classes {
    export interface NSConditionLock<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSLockingProtocol {
      alloc<R = NSConditionLock>(): R;
      new: <R = NSConditionLock>() => R;
      allocWithZone<R = unknown, P0 = cocoa._NSZone>(_allocWithZone: P0): R;
    }
  }
}

declare const NSConditionLock: cocoa.classes.NSConditionLock;
