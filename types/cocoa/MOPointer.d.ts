/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MOPointer<T = any> extends cocoa.NSObject {
    initWithValue<R = unknown, P0 = unknown>(_initWithValue: P0): R;
    value<R = unknown>(): R;
  }
  namespace classes {
    export interface MOPointer<T = any> extends cocoa.classes.NSObject {
      alloc<R = MOPointer>(): R;
      new: <R = MOPointer>() => R;
    }
  }
}

declare const MOPointer: cocoa.classes.MOPointer;
