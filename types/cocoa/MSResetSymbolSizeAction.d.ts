/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSResetSymbolSizeAction<T = any> extends cocoa.MSDocumentAction {
    label<R = unknown>(): R;
    validate<R = boolean>(): R;
    resetSymbolSize<R = void, P0 = unknown>(_resetSymbolSize: P0): R;
  }
  namespace classes {
    export interface MSResetSymbolSizeAction<T = any> extends cocoa.classes.MSDocumentAction {
      alloc<R = MSResetSymbolSizeAction>(): R;
      new: <R = MSResetSymbolSizeAction>() => R;
    }
  }
}

declare const MSResetSymbolSizeAction: cocoa.classes.MSResetSymbolSizeAction;
