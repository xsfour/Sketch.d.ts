/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTexturedComboBoxCell<T = any> extends NSComboBoxCell {}
  namespace classes {
    export interface NSTexturedComboBoxCell<T = any> extends NSComboBoxCell {
      alloc<R = NSTexturedComboBoxCell>(): R;
      new: <R = NSTexturedComboBoxCell>() => R;
    }
  }
}

declare const NSTexturedComboBoxCell: cocoa.classes.NSTexturedComboBoxCell;
