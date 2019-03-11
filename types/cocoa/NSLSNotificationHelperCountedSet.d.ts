/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSLSNotificationHelperCountedSet<T = any> extends cocoa.NSLSNotificationHelper {
    dealloc<R = void>(): R;
  }
  namespace classes {
    export interface NSLSNotificationHelperCountedSet<T = any> extends cocoa.classes.NSLSNotificationHelper {
      alloc<R = NSLSNotificationHelperCountedSet>(): R;
      new: <R = NSLSNotificationHelperCountedSet>() => R;
    }
  }
}

declare const NSLSNotificationHelperCountedSet: cocoa.classes.NSLSNotificationHelperCountedSet;
