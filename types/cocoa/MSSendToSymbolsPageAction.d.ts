/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSendToSymbolsPageAction<T = any> extends MSDocumentAction {
    historyMomentTitle<R = unknown>(): R;
    label<R = unknown>(): R;
    validate<R = boolean>(): R;
    sendSymbolToSymbolsPage<R = void, P0 = unknown>(_sendSymbolToSymbolsPage: P0): R;
    isAlreadyOnSymbolsPage<R = boolean>(): R;
  }
  namespace classes {
    export interface MSSendToSymbolsPageAction<T = any> extends MSDocumentAction {
      alloc<R = MSSendToSymbolsPageAction>(): R;
      new: <R = MSSendToSymbolsPageAction>() => R;
    }
  }
}

declare const MSSendToSymbolsPageAction: cocoa.classes.MSSendToSymbolsPageAction;
