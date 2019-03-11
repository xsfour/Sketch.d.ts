/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSKeyValueIvarGetter<T = any> extends cocoa.NSKeyValueGetter {
    initWithContainerClassID_key_containerIsa_ivar<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = cocoa.objc_ivar>(_initWithContainerClassID: P0, _key: P1, _containerIsa: P2, _ivar: P3): R;
  }
  namespace classes {
    export interface NSKeyValueIvarGetter<T = any> extends cocoa.classes.NSKeyValueGetter {
      alloc<R = NSKeyValueIvarGetter>(): R;
      new: <R = NSKeyValueIvarGetter>() => R;
    }
  }
}

declare const NSKeyValueIvarGetter: cocoa.classes.NSKeyValueIvarGetter;
