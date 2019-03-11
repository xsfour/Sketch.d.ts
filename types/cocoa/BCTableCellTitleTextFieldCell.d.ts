/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCTableCellTitleTextFieldCell<T = any> extends cocoa.NSTextFieldCell {}
  namespace classes {
    export interface BCTableCellTitleTextFieldCell<T = any> extends cocoa.classes.NSTextFieldCell {
      alloc<R = BCTableCellTitleTextFieldCell>(): R;
      new: <R = BCTableCellTitleTextFieldCell>() => R;
    }
  }
}

declare const BCTableCellTitleTextFieldCell: cocoa.classes.BCTableCellTitleTextFieldCell;
