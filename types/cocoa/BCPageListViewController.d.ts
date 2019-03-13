/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCPageListViewController<T = any> extends BCOutlineViewController {}
  namespace classes {
    export interface BCPageListViewController<T = any> extends BCOutlineViewController {
      alloc<R = BCPageListViewController>(): R;
      new: <R = BCPageListViewController>() => R;
    }
  }
}

declare const BCPageListViewController: cocoa.classes.BCPageListViewController;
