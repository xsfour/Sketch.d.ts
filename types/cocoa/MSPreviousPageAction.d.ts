/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPreviousPageAction<T = any> extends MSChangePageAction {
    label<R = unknown>(): R;
    previousPage<R = void, P0 = unknown>(_previousPage: P0): R;
  }
  namespace classes {
    export interface MSPreviousPageAction<T = any> extends MSChangePageAction {
      alloc<R = MSPreviousPageAction>(): R;
      new: <R = MSPreviousPageAction>() => R;
    }
  }
}

declare const MSPreviousPageAction: cocoa.classes.MSPreviousPageAction;
