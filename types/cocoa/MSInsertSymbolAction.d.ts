/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInsertSymbolAction<T = any> extends cocoa.MSSharedSymbolAction {
    tooltip<R = unknown>(): R;
    label<R = unknown>(): R;
  }
  namespace classes {
    export interface MSInsertSymbolAction<T = any> extends cocoa.classes.MSSharedSymbolAction {
      alloc<R = MSInsertSymbolAction>(): R;
      new: <R = MSInsertSymbolAction>() => R;
    }
  }
}

declare const MSInsertSymbolAction: cocoa.classes.MSInsertSymbolAction;
