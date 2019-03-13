/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCTableCellTitleTextFieldCell<T = any> extends NSTextFieldCell {}
  namespace classes {
    export interface BCTableCellTitleTextFieldCell<T = any> extends NSTextFieldCell {
      alloc<R = BCTableCellTitleTextFieldCell>(): R;
      new: <R = BCTableCellTitleTextFieldCell>() => R;
    }
  }
}

declare const BCTableCellTitleTextFieldCell: cocoa.classes.BCTableCellTitleTextFieldCell;
