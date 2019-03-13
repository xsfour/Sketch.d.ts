/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSExceptionHandlingRecursiveLock<T = any> extends NSRecursiveLock {}
  namespace classes {
    export interface NSExceptionHandlingRecursiveLock<T = any> extends NSRecursiveLock {
      alloc<R = NSExceptionHandlingRecursiveLock>(): R;
      new: <R = NSExceptionHandlingRecursiveLock>() => R;
    }
  }
}

declare const NSExceptionHandlingRecursiveLock: cocoa.classes.NSExceptionHandlingRecursiveLock;
