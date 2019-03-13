/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCTableViewCellButtonCell<T = any> extends NSButtonCell {}
  namespace classes {
    export interface BCTableViewCellButtonCell<T = any> extends NSButtonCell {
      alloc<R = BCTableViewCellButtonCell>(): R;
      new: <R = BCTableViewCellButtonCell>() => R;
    }
  }
}

declare const BCTableViewCellButtonCell: cocoa.classes.BCTableViewCellButtonCell;
