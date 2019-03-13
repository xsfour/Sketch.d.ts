/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSymbol<T = any> extends _MSSymbol {}
  namespace classes {
    export interface MSSymbol<T = any> extends _MSSymbol {
      alloc<R = MSSymbol>(): R;
      new: <R = MSSymbol>() => R;
    }
  }
}

declare const MSSymbol: cocoa.classes.MSSymbol;
