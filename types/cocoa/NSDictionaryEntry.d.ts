/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDictionaryEntry<T = any> extends cocoa.NSObject {
    dealloc<R = void>(): R;
  }
  namespace classes {
    export interface NSDictionaryEntry<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSDictionaryEntry>(): R;
      new: <R = NSDictionaryEntry>() => R;
    }
  }
}

declare const NSDictionaryEntry: cocoa.classes.NSDictionaryEntry;
