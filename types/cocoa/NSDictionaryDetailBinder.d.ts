/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDictionaryDetailBinder<T = any> extends cocoa.NSArrayDetailBinder {}
  namespace classes {
    export interface NSDictionaryDetailBinder<T = any> extends cocoa.classes.NSArrayDetailBinder {
      alloc<R = NSDictionaryDetailBinder>(): R;
      new: <R = NSDictionaryDetailBinder>() => R;
    }
  }
}

declare const NSDictionaryDetailBinder: cocoa.classes.NSDictionaryDetailBinder;
