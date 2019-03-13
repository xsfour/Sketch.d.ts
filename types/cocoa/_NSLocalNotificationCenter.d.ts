/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSLocalNotificationCenter<T = any> extends NSDistributedNotificationCenter {}
  namespace classes {
    export interface _NSLocalNotificationCenter<T = any> extends NSDistributedNotificationCenter {
      alloc<R = _NSLocalNotificationCenter>(): R;
      new: <R = _NSLocalNotificationCenter>() => R;
    }
  }
}
