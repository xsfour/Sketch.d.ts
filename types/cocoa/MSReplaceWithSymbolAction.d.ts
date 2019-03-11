/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSReplaceWithSymbolAction<T = any> extends cocoa.MSSharedSymbolAction {
    label<R = unknown>(): R;
    removeDocumentCloseObserver<R = void>(): R;
    validate<R = boolean>(): R;
    preferredMenuAction<R = string>(): R;
    replaceWithSymbol<R = void, P0 = unknown>(_replaceWithSymbol: P0): R;
    documentCloseObserver<R = cocoa.NSObject>(): R;
    setDocumentCloseObserver<R = void, P0 = cocoa.NSObject>(_v: P0): R;
  }
  namespace classes {
    export interface MSReplaceWithSymbolAction<T = any> extends cocoa.classes.MSSharedSymbolAction {
      alloc<R = MSReplaceWithSymbolAction>(): R;
      new: <R = MSReplaceWithSymbolAction>() => R;
    }
  }
}

declare const MSReplaceWithSymbolAction: cocoa.classes.MSReplaceWithSymbolAction;
