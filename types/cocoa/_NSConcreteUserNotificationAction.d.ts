/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSConcreteUserNotificationAction<T = any> extends cocoa.NSUserNotificationAction, cocoa.NSSecureCodingProtocol {
    _setTitle<R = void, P0 = unknown>(__setTitle: P0): R;
    title<R = unknown>(): R;
    _setIdentifier<R = void, P0 = unknown>(__setIdentifier: P0): R;
    identifier<R = unknown>(): R;
    description<R = unknown>(): R;
    dealloc<R = void>(): R;
  }
  namespace classes {
    export interface _NSConcreteUserNotificationAction<T = any> extends cocoa.classes.NSUserNotificationAction, cocoa.classes.NSSecureCodingProtocol {
      alloc<R = _NSConcreteUserNotificationAction>(): R;
      new: <R = _NSConcreteUserNotificationAction>() => R;
    }
  }
}
