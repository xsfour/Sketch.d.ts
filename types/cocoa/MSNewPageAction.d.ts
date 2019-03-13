/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSNewPageAction<T = any> extends MSDocumentAction {
    label<R = unknown>(): R;
    historyMomentTitle<R = unknown>(): R;
    preferredMenuAction<R = string>(): R;
    addNewPage<R = void, P0 = unknown>(_addNewPage: P0): R;
  }
  namespace classes {
    export interface MSNewPageAction<T = any> extends MSDocumentAction {
      alloc<R = MSNewPageAction>(): R;
      new: <R = MSNewPageAction>() => R;
    }
  }
}

declare const MSNewPageAction: cocoa.classes.MSNewPageAction;
