/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSKeyValueUndefinedGetter<T = any> extends cocoa.NSKeyValueGetter {
    initWithContainerClassID_key_containerIsa<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_initWithContainerClassID: P0, _key: P1, _containerIsa: P2): R;
  }
  namespace classes {
    export interface NSKeyValueUndefinedGetter<T = any> extends cocoa.classes.NSKeyValueGetter {
      alloc<R = NSKeyValueUndefinedGetter>(): R;
      new: <R = NSKeyValueUndefinedGetter>() => R;
    }
  }
}

declare const NSKeyValueUndefinedGetter: cocoa.classes.NSKeyValueUndefinedGetter;
