/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSImmutableSymbolContainer<T = any> extends MSImmutableSharedObjectContainer {}
  namespace classes {
    export interface _MSImmutableSymbolContainer<T = any> extends MSImmutableSharedObjectContainer {
      alloc<R = _MSImmutableSymbolContainer>(): R;
      new: <R = _MSImmutableSymbolContainer>() => R;
    }
  }
}
