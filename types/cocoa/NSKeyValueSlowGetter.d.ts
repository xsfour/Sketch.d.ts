/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSKeyValueSlowGetter<T = any> extends NSKeyValueGetter {
    initWithContainerClassID_key_containerIsa<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_initWithContainerClassID: P0, _key: P1, _containerIsa: P2): R;
  }
  namespace classes {
    export interface NSKeyValueSlowGetter<T = any> extends NSKeyValueGetter {
      alloc<R = NSKeyValueSlowGetter>(): R;
      new: <R = NSKeyValueSlowGetter>() => R;
    }
  }
}

declare const NSKeyValueSlowGetter: cocoa.classes.NSKeyValueSlowGetter;
