/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSOpenSymbolInLibraryAction<T = any> extends cocoa.MSOpenInLibraryAction {
    label<R = unknown>(): R;
    openLibraryForForeignSymbols<R = void, P0 = unknown>(_openLibraryForForeignSymbols: P0): R;
    foreignObjects<R = unknown>(): R;
  }
  namespace classes {
    export interface MSOpenSymbolInLibraryAction<T = any> extends cocoa.classes.MSOpenInLibraryAction {
      alloc<R = MSOpenSymbolInLibraryAction>(): R;
      new: <R = MSOpenSymbolInLibraryAction>() => R;
    }
  }
}

declare const MSOpenSymbolInLibraryAction: cocoa.classes.MSOpenSymbolInLibraryAction;
