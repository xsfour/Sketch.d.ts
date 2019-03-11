/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSImmutableForeignSymbol<T = any> extends cocoa.MSImmutableForeignObject {
    symbolMaster<R = cocoa.MSImmutableSymbolMaster>(): R;
    setSymbolMaster<R = void, P0 = cocoa.MSImmutableSymbolMaster>(_v: P0): R;
    originalMaster<R = cocoa.MSImmutableSymbolMaster>(): R;
    setOriginalMaster<R = void, P0 = cocoa.MSImmutableSymbolMaster>(_v: P0): R;
  }
  namespace classes {
    export interface _MSImmutableForeignSymbol<T = any> extends cocoa.classes.MSImmutableForeignObject {
      alloc<R = _MSImmutableForeignSymbol>(): R;
      new: <R = _MSImmutableForeignSymbol>() => R;
    }
  }
}
