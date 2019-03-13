/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSNullFileHandle<T = any> extends NSFileHandle {
    offsetInFile<R = number>(): R;
    availableData<R = unknown>(): R;
  }
  namespace classes {
    export interface NSNullFileHandle<T = any> extends NSFileHandle {
      alloc<R = NSNullFileHandle>(): R;
      new: <R = NSNullFileHandle>() => R;
    }
  }
}

declare const NSNullFileHandle: cocoa.classes.NSNullFileHandle;
