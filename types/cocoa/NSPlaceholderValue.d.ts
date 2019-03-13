/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPlaceholderValue<T = any> extends NSNumber {
    objCType<R = string>(): R;
    dealloc<R = void>(): R;
    _tryRetain<R = boolean>(): R;
    _isDeallocating<R = boolean>(): R;
  }
  namespace classes {
    export interface NSPlaceholderValue<T = any> extends NSNumber {
      alloc<R = NSPlaceholderValue>(): R;
      new: <R = NSPlaceholderValue>() => R;
    }
  }
}

declare const NSPlaceholderValue: cocoa.classes.NSPlaceholderValue;
