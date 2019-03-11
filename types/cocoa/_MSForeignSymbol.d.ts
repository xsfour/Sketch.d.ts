/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSForeignSymbol<T = any> extends cocoa.MSForeignObject {
    symbolMaster<R = cocoa.MSSymbolMaster>(): R;
    setSymbolMaster<R = void, P0 = cocoa.MSSymbolMaster>(_v: P0): R;
    originalMaster<R = cocoa.MSSymbolMaster>(): R;
    setOriginalMaster<R = void, P0 = cocoa.MSSymbolMaster>(_v: P0): R;
  }
  namespace classes {
    export interface _MSForeignSymbol<T = any> extends cocoa.classes.MSForeignObject {
      alloc<R = _MSForeignSymbol>(): R;
      new: <R = _MSForeignSymbol>() => R;
    }
  }
}
