/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSharedSymbolAction<T = any> extends MSSharedObjectAction {
    sharedObjectName<R = unknown>(): R;
    menuBuilder<R = MSForeignObjectMenuBuilder>(): R;
    setMenuBuilder<R = void, P0 = MSForeignObjectMenuBuilder>(_v: P0): R;
  }
  namespace classes {
    export interface MSSharedSymbolAction<T = any> extends MSSharedObjectAction {
      alloc<R = MSSharedSymbolAction>(): R;
      new: <R = MSSharedSymbolAction>() => R;
    }
  }
}

declare const MSSharedSymbolAction: cocoa.classes.MSSharedSymbolAction;
