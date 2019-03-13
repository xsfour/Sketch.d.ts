/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInsertArrowEventHandler<T = any> extends MSInsertLineEventHandler {}
  namespace classes {
    export interface MSInsertArrowEventHandler<T = any> extends MSInsertLineEventHandler {
      alloc<R = MSInsertArrowEventHandler>(): R;
      new: <R = MSInsertArrowEventHandler>() => R;
    }
  }
}

declare const MSInsertArrowEventHandler: cocoa.classes.MSInsertArrowEventHandler;
