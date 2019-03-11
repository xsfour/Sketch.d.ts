/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutableSymbol<T = any> extends cocoa._MSImmutableSymbol {
    masterInstance<R = unknown>(): R;
  }
  namespace classes {
    export interface MSImmutableSymbol<T = any> extends cocoa.classes._MSImmutableSymbol {
      alloc<R = MSImmutableSymbol>(): R;
      new: <R = MSImmutableSymbol>() => R;
    }
  }
}

declare const MSImmutableSymbol: cocoa.classes.MSImmutableSymbol;
