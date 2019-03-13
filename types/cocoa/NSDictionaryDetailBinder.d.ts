/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDictionaryDetailBinder<T = any> extends NSArrayDetailBinder {}
  namespace classes {
    export interface NSDictionaryDetailBinder<T = any> extends NSArrayDetailBinder {
      alloc<R = NSDictionaryDetailBinder>(): R;
      new: <R = NSDictionaryDetailBinder>() => R;
    }
  }
}

declare const NSDictionaryDetailBinder: cocoa.classes.NSDictionaryDetailBinder;
