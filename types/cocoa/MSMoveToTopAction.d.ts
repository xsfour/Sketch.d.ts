/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSMoveToTopAction<T = any> extends cocoa.MSDocumentAction {
    label<R = unknown>(): R;
    validate<R = boolean>(): R;
    moveToTop<R = void, P0 = unknown>(_moveToTop: P0): R;
  }
  namespace classes {
    export interface MSMoveToTopAction<T = any> extends cocoa.classes.MSDocumentAction {
      alloc<R = MSMoveToTopAction>(): R;
      new: <R = MSMoveToTopAction>() => R;
    }
  }
}

declare const MSMoveToTopAction: cocoa.classes.MSMoveToTopAction;
