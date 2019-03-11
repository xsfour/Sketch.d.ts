/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSComboBoxButtonCell<T = any> extends cocoa.NSButtonCell {}
  namespace classes {
    export interface NSComboBoxButtonCell<T = any> extends cocoa.classes.NSButtonCell {
      alloc<R = NSComboBoxButtonCell>(): R;
      new: <R = NSComboBoxButtonCell>() => R;
    }
  }
}

declare const NSComboBoxButtonCell: cocoa.classes.NSComboBoxButtonCell;
