/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSharedSymbolAction<T = any> extends cocoa.MSSharedObjectAction {
    sharedObjectName<R = unknown>(): R;
    menuBuilder<R = cocoa.MSForeignObjectMenuBuilder>(): R;
    setMenuBuilder<R = void, P0 = cocoa.MSForeignObjectMenuBuilder>(_v: P0): R;
  }
  namespace classes {
    export interface MSSharedSymbolAction<T = any> extends cocoa.classes.MSSharedObjectAction {
      alloc<R = MSSharedSymbolAction>(): R;
      new: <R = MSSharedSymbolAction>() => R;
    }
  }
}

declare const MSSharedSymbolAction: cocoa.classes.MSSharedSymbolAction;
