/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSKeyValueSlowSetter<T = any> extends cocoa.NSKeyValueSetter {
    initWithContainerClassID_key_containerIsa<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_initWithContainerClassID: P0, _key: P1, _containerIsa: P2): R;
  }
  namespace classes {
    export interface NSKeyValueSlowSetter<T = any> extends cocoa.classes.NSKeyValueSetter {
      alloc<R = NSKeyValueSlowSetter>(): R;
      new: <R = NSKeyValueSlowSetter>() => R;
    }
  }
}

declare const NSKeyValueSlowSetter: cocoa.classes.NSKeyValueSlowSetter;
