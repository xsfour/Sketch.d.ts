/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSKeyBinding<T = any> extends NSObject {
    dealloc<R = void>(): R;
    setKey<R = void, P0 = unknown>(_setKey: P0): R;
    key<R = unknown>(): R;
    targetClass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSKeyBinding<T = any> extends NSObject {
      alloc<R = NSKeyBinding>(): R;
      new: <R = NSKeyBinding>() => R;
      suppressCapitalizedKeyWarning<R = void>(): R;
    }
  }
}

declare const NSKeyBinding: cocoa.classes.NSKeyBinding;
