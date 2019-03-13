/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSComboBoxButtonCell<T = any> extends NSButtonCell {}
  namespace classes {
    export interface NSComboBoxButtonCell<T = any> extends NSButtonCell {
      alloc<R = NSComboBoxButtonCell>(): R;
      new: <R = NSComboBoxButtonCell>() => R;
    }
  }
}

declare const NSComboBoxButtonCell: cocoa.classes.NSComboBoxButtonCell;
