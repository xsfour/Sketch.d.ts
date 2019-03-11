/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutableSymbolContainer<T = any> extends cocoa._MSImmutableSymbolContainer {}
  namespace classes {
    export interface MSImmutableSymbolContainer<T = any> extends cocoa.classes._MSImmutableSymbolContainer {
      alloc<R = MSImmutableSymbolContainer>(): R;
      new: <R = MSImmutableSymbolContainer>() => R;
    }
  }
}

declare const MSImmutableSymbolContainer: cocoa.classes.MSImmutableSymbolContainer;
