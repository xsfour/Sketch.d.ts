/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSKeyValueSetter<T = any> extends NSKeyValueAccessor {}
  namespace classes {
    export interface NSKeyValueSetter<T = any> extends NSKeyValueAccessor {
      alloc<R = NSKeyValueSetter>(): R;
      new: <R = NSKeyValueSetter>() => R;
    }
  }
}

declare const NSKeyValueSetter: cocoa.classes.NSKeyValueSetter;
