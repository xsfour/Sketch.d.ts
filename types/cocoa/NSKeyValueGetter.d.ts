/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSKeyValueGetter<T = any> extends cocoa.NSKeyValueAccessor {}
  namespace classes {
    export interface NSKeyValueGetter<T = any> extends cocoa.classes.NSKeyValueAccessor {
      alloc<R = NSKeyValueGetter>(): R;
      new: <R = NSKeyValueGetter>() => R;
    }
  }
}

declare const NSKeyValueGetter: cocoa.classes.NSKeyValueGetter;
