/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSForeignSymbolProvider<T = any> extends MSForeignObjectProvider {
    objectType<R = number>(): R;
    foreignObjects<R = unknown>(): R;
  }
  namespace classes {
    export interface MSForeignSymbolProvider<T = any> extends MSForeignObjectProvider {
      alloc<R = MSForeignSymbolProvider>(): R;
      new: <R = MSForeignSymbolProvider>() => R;
    }
  }
}

declare const MSForeignSymbolProvider: cocoa.classes.MSForeignSymbolProvider;
