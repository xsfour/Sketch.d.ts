/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSymbolContainer<T = any> extends _MSSymbolContainer {}
  namespace classes {
    export interface MSSymbolContainer<T = any> extends _MSSymbolContainer {
      alloc<R = MSSymbolContainer>(): R;
      new: <R = MSSymbolContainer>() => R;
    }
  }
}

declare const MSSymbolContainer: cocoa.classes.MSSymbolContainer;
