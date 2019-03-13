/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSSymbol<T = any> extends MSSharedObject {}
  namespace classes {
    export interface _MSSymbol<T = any> extends MSSharedObject {
      alloc<R = _MSSymbol>(): R;
      new: <R = _MSSymbol>() => R;
    }
  }
}
