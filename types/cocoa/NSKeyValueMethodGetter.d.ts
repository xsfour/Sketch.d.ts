/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSKeyValueMethodGetter<T = any> extends NSKeyValueGetter {
    initWithContainerClassID_key_method<R = unknown, P0 = unknown, P1 = unknown, P2 = objc_method>(_initWithContainerClassID: P0, _key: P1, _method: P2): R;
  }
  namespace classes {
    export interface NSKeyValueMethodGetter<T = any> extends NSKeyValueGetter {
      alloc<R = NSKeyValueMethodGetter>(): R;
      new: <R = NSKeyValueMethodGetter>() => R;
    }
  }
}

declare const NSKeyValueMethodGetter: cocoa.classes.NSKeyValueMethodGetter;
