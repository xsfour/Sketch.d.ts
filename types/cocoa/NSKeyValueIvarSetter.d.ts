/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSKeyValueIvarSetter<T = any> extends cocoa.NSKeyValueSetter {
    ivar<R = cocoa.objc_ivar>(): R;
    initWithContainerClassID_key_containerIsa_ivar<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = cocoa.objc_ivar>(_initWithContainerClassID: P0, _key: P1, _containerIsa: P2, _ivar: P3): R;
  }
  namespace classes {
    export interface NSKeyValueIvarSetter<T = any> extends cocoa.classes.NSKeyValueSetter {
      alloc<R = NSKeyValueIvarSetter>(): R;
      new: <R = NSKeyValueIvarSetter>() => R;
    }
  }
}

declare const NSKeyValueIvarSetter: cocoa.classes.NSKeyValueIvarSetter;
