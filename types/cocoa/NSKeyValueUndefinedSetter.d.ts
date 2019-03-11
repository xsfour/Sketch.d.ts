/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSKeyValueUndefinedSetter<T = any> extends cocoa.NSKeyValueSetter {
    initWithContainerClassID_key_containerIsa<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_initWithContainerClassID: P0, _key: P1, _containerIsa: P2): R;
  }
  namespace classes {
    export interface NSKeyValueUndefinedSetter<T = any> extends cocoa.classes.NSKeyValueSetter {
      alloc<R = NSKeyValueUndefinedSetter>(): R;
      new: <R = NSKeyValueUndefinedSetter>() => R;
    }
  }
}

declare const NSKeyValueUndefinedSetter: cocoa.classes.NSKeyValueUndefinedSetter;
