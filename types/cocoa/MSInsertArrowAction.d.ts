/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInsertArrowAction<T = any> extends MSInsertLineAction {}
  namespace classes {
    export interface MSInsertArrowAction<T = any> extends MSInsertLineAction {
      alloc<R = MSInsertArrowAction>(): R;
      new: <R = MSInsertArrowAction>() => R;
    }
  }
}

declare const MSInsertArrowAction: cocoa.classes.MSInsertArrowAction;
