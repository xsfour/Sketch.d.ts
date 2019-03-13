/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSConnectionHelper<T = any> extends NSObject {
    setWhitelist<R = void, P0 = unknown>(_setWhitelist: P0): R;
    dealloc<R = void>(): R;
  }
  namespace classes {
    export interface NSConnectionHelper<T = any> extends NSObject {
      alloc<R = NSConnectionHelper>(): R;
      new: <R = NSConnectionHelper>() => R;
    }
  }
}

declare const NSConnectionHelper: cocoa.classes.NSConnectionHelper;
