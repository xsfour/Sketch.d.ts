/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSImmutableSymbol<T = any> extends MSImmutableSharedObject {}
  namespace classes {
    export interface _MSImmutableSymbol<T = any> extends MSImmutableSharedObject {
      alloc<R = _MSImmutableSymbol>(): R;
      new: <R = _MSImmutableSymbol>() => R;
    }
  }
}
