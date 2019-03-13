/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSConcreteNotification<T = any> extends NSNotification {
    recycle<R = void>(): R;
    dealloc<R = void>(): R;
    userInfo<R = unknown>(): R;
    object<R = unknown>(): R;
    name<R = unknown>(): R;
  }
  namespace classes {
    export interface NSConcreteNotification<T = any> extends NSNotification {
      alloc<R = NSConcreteNotification>(): R;
      new: <R = NSConcreteNotification>() => R;
      newTempNotificationWithName_object_userInfo<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_newTempNotificationWithName: P0, _object: P1, _userInfo: P2): R;
    }
  }
}

declare const NSConcreteNotification: cocoa.classes.NSConcreteNotification;
