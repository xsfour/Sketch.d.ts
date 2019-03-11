/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSNextPageAction<T = any> extends cocoa.MSChangePageAction {
    label<R = unknown>(): R;
    nextPage<R = void, P0 = unknown>(_nextPage: P0): R;
  }
  namespace classes {
    export interface MSNextPageAction<T = any> extends cocoa.classes.MSChangePageAction {
      alloc<R = MSNextPageAction>(): R;
      new: <R = MSNextPageAction>() => R;
    }
  }
}

declare const MSNextPageAction: cocoa.classes.MSNextPageAction;
