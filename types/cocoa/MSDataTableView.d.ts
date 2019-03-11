/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSDataTableView<T = any> extends cocoa.BCKeyEventActionTableView {}
  namespace classes {
    export interface MSDataTableView<T = any> extends cocoa.classes.BCKeyEventActionTableView {
      alloc<R = MSDataTableView>(): R;
      new: <R = MSDataTableView>() => R;
    }
  }
}

declare const MSDataTableView: cocoa.classes.MSDataTableView;
