/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSKeyValueContainerClass<T = any> extends cocoa.NSObject {
    description<R = unknown>(): R;
    initWithOriginalClass<R = unknown, P0 = unknown>(_initWithOriginalClass: P0): R;
  }
  namespace classes {
    export interface NSKeyValueContainerClass<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSKeyValueContainerClass>(): R;
      new: <R = NSKeyValueContainerClass>() => R;
    }
  }
}

declare const NSKeyValueContainerClass: cocoa.classes.NSKeyValueContainerClass;
