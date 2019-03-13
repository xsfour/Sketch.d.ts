/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSComboTableView<T = any> extends NSTableView {
    numberOfRows<R = number>(): R;
  }
  namespace classes {
    export interface NSComboTableView<T = any> extends NSTableView {
      alloc<R = NSComboTableView>(): R;
      new: <R = NSComboTableView>() => R;
    }
  }
}

declare const NSComboTableView: cocoa.classes.NSComboTableView;
