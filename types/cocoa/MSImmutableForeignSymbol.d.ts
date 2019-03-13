/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutableForeignSymbol<T = any> extends _MSImmutableForeignSymbol {}
  namespace classes {
    export interface MSImmutableForeignSymbol<T = any> extends _MSImmutableForeignSymbol {
      alloc<R = MSImmutableForeignSymbol>(): R;
      new: <R = MSImmutableForeignSymbol>() => R;
    }
  }
}

declare const MSImmutableForeignSymbol: cocoa.classes.MSImmutableForeignSymbol;
