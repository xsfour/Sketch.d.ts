/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSExceptionHandlingRecursiveLock<T = any> extends cocoa.NSRecursiveLock {}
  namespace classes {
    export interface NSExceptionHandlingRecursiveLock<T = any> extends cocoa.classes.NSRecursiveLock {
      alloc<R = NSExceptionHandlingRecursiveLock>(): R;
      new: <R = NSExceptionHandlingRecursiveLock>() => R;
    }
  }
}

declare const NSExceptionHandlingRecursiveLock: cocoa.classes.NSExceptionHandlingRecursiveLock;
