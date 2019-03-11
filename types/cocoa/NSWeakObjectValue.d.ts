/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSWeakObjectValue<T = any> extends cocoa.NSValue {
    objCType<R = string>(): R;
    dealloc<R = void>(): R;
    initWithObject<R = unknown, P0 = unknown>(_initWithObject: P0): R;
  }
  namespace classes {
    export interface NSWeakObjectValue<T = any> extends cocoa.classes.NSValue {
      alloc<R = NSWeakObjectValue>(): R;
      new: <R = NSWeakObjectValue>() => R;
    }
  }
}

declare const NSWeakObjectValue: cocoa.classes.NSWeakObjectValue;
