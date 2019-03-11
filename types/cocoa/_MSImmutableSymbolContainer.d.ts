/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSImmutableSymbolContainer<T = any> extends cocoa.MSImmutableSharedObjectContainer {}
  namespace classes {
    export interface _MSImmutableSymbolContainer<T = any> extends cocoa.classes.MSImmutableSharedObjectContainer {
      alloc<R = _MSImmutableSymbolContainer>(): R;
      new: <R = _MSImmutableSymbolContainer>() => R;
    }
  }
}
