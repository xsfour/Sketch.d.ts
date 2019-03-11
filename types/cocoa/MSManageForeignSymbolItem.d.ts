/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSManageForeignSymbolItem<T = any> extends cocoa.NSObject {
    cxx_destruct<R = void>(): R;
    initWithForeignSymbol<R = unknown, P0 = unknown>(_initWithForeignSymbol: P0): R;
    library<R = cocoa.MSAssetLibrary>(): R;
    foreignSymbol<R = cocoa.MSForeignSymbol>(): R;
    libraryName<R = cocoa.NSString>(): R;
    symbolName<R = cocoa.NSString>(): R;
  }
  namespace classes {
    export interface MSManageForeignSymbolItem<T = any> extends cocoa.classes.NSObject {
      alloc<R = MSManageForeignSymbolItem>(): R;
      new: <R = MSManageForeignSymbolItem>() => R;
    }
  }
}

declare const MSManageForeignSymbolItem: cocoa.classes.MSManageForeignSymbolItem;
