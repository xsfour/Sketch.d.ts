/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCFType<T = any> extends cocoa.NSObject {
    retainWeakReference<R = boolean>(): R;
    allowsWeakReference<R = boolean>(): R;
    hash<R = number>(): R;
  }
  namespace classes {
    export interface NSCFType<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSCFType>(): R;
      new: <R = NSCFType>() => R;
      automaticallyNotifiesObserversForKey<R = boolean, P0 = unknown>(_automaticallyNotifiesObserversForKey: P0): R;
    }
  }
}

declare const NSCFType: cocoa.classes.NSCFType;
