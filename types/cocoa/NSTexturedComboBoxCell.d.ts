/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTexturedComboBoxCell<T = any> extends cocoa.NSComboBoxCell {}
  namespace classes {
    export interface NSTexturedComboBoxCell<T = any> extends cocoa.classes.NSComboBoxCell {
      alloc<R = NSTexturedComboBoxCell>(): R;
      new: <R = NSTexturedComboBoxCell>() => R;
    }
  }
}

declare const NSTexturedComboBoxCell: cocoa.classes.NSTexturedComboBoxCell;
