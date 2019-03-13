/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSShowSupportPageAction<T = any> extends MSAction {
    label<R = unknown>(): R;
    showSupportPage<R = void, P0 = unknown>(_showSupportPage: P0): R;
  }
  namespace classes {
    export interface MSShowSupportPageAction<T = any> extends MSAction {
      alloc<R = MSShowSupportPageAction>(): R;
      new: <R = MSShowSupportPageAction>() => R;
    }
  }
}

declare const MSShowSupportPageAction: cocoa.classes.MSShowSupportPageAction;
