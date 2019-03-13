/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSChangePageAction<T = any> extends MSDocumentAction {
    changePageIndexBy<R = void, P0 = number>(_changePageIndexBy: P0): R;
    validate<R = boolean>(): R;
  }
  namespace classes {
    export interface MSChangePageAction<T = any> extends MSDocumentAction {
      alloc<R = MSChangePageAction>(): R;
      new: <R = MSChangePageAction>() => R;
    }
  }
}

declare const MSChangePageAction: cocoa.classes.MSChangePageAction;
