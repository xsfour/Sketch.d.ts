/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSLocalNotificationCenter<T = any> extends cocoa.NSDistributedNotificationCenter {}
  namespace classes {
    export interface _NSLocalNotificationCenter<T = any> extends cocoa.classes.NSDistributedNotificationCenter {
      alloc<R = _NSLocalNotificationCenter>(): R;
      new: <R = _NSLocalNotificationCenter>() => R;
    }
  }
}
