/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSForeignSymbol<T = any> extends MSForeignObject {
    symbolMaster<R = MSSymbolMaster>(): R;
    setSymbolMaster<R = void, P0 = MSSymbolMaster>(_v: P0): R;
    originalMaster<R = MSSymbolMaster>(): R;
    setOriginalMaster<R = void, P0 = MSSymbolMaster>(_v: P0): R;
  }
  namespace classes {
    export interface _MSForeignSymbol<T = any> extends MSForeignObject {
      alloc<R = _MSForeignSymbol>(): R;
      new: <R = _MSForeignSymbol>() => R;
    }
  }
}
