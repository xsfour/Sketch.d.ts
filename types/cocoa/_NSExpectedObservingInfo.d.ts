/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSExpectedObservingInfo<T = any> extends NSObject {
    description<R = unknown>(): R;
    shouldSuppressNotificationFromObject_keyPath<R = boolean, P0 = unknown, P1 = unknown>(_shouldSuppressNotificationFromObject: P0, _keyPath: P1): R;
    unsuppressSpecificNotificationFromObject_keyPath<R = void, P0 = unknown, P1 = unknown>(_unsuppressSpecificNotificationFromObject: P0, _keyPath: P1): R;
    suppressSpecificNotificationFromObject_keyPath<R = void, P0 = unknown, P1 = unknown>(_suppressSpecificNotificationFromObject: P0, _keyPath: P1): R;
    unsuppressAllNotificationsFromObject<R = void, P0 = unknown>(_unsuppressAllNotificationsFromObject: P0): R;
    suppressAllNotificationsFromObject<R = void, P0 = unknown>(_suppressAllNotificationsFromObject: P0): R;
    unsuppressAllNotifications<R = void>(): R;
    suppressAllNotifications<R = void>(): R;
    dealloc<R = void>(): R;
  }
  namespace classes {
    export interface _NSExpectedObservingInfo<T = any> extends NSObject {
      alloc<R = _NSExpectedObservingInfo>(): R;
      new: <R = _NSExpectedObservingInfo>() => R;
    }
  }
}
