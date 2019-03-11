/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInsertArrowAction<T = any> extends cocoa.MSInsertLineAction {}
  namespace classes {
    export interface MSInsertArrowAction<T = any> extends cocoa.classes.MSInsertLineAction {
      alloc<R = MSInsertArrowAction>(): R;
      new: <R = MSInsertArrowAction>() => R;
    }
  }
}

declare const MSInsertArrowAction: cocoa.classes.MSInsertArrowAction;
