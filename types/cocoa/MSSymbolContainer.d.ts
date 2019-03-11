/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSymbolContainer<T = any> extends cocoa._MSSymbolContainer {}
  namespace classes {
    export interface MSSymbolContainer<T = any> extends cocoa.classes._MSSymbolContainer {
      alloc<R = MSSymbolContainer>(): R;
      new: <R = MSSymbolContainer>() => R;
    }
  }
}

declare const MSSymbolContainer: cocoa.classes.MSSymbolContainer;
