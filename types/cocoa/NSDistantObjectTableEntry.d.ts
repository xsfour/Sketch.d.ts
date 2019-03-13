/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDistantObjectTableEntry<T = any> extends NSObject {
    description<R = unknown>(): R;
    dealloc<R = void>(): R;
  }
  namespace classes {
    export interface NSDistantObjectTableEntry<T = any> extends NSObject {
      alloc<R = NSDistantObjectTableEntry>(): R;
      new: <R = NSDistantObjectTableEntry>() => R;
    }
  }
}

declare const NSDistantObjectTableEntry: cocoa.classes.NSDistantObjectTableEntry;
