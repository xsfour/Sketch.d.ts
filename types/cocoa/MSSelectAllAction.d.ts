/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSelectAllAction<T = any> extends cocoa.MSDocumentAction {
    label<R = unknown>(): R;
    selectAll<R = void, P0 = unknown>(_selectAll: P0): R;
    validate<R = boolean>(): R;
  }
  namespace classes {
    export interface MSSelectAllAction<T = any> extends cocoa.classes.MSDocumentAction {
      alloc<R = MSSelectAllAction>(): R;
      new: <R = MSSelectAllAction>() => R;
    }
  }
}

declare const MSSelectAllAction: cocoa.classes.MSSelectAllAction;
