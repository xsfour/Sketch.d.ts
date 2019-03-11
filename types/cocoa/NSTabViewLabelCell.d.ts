/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTabViewLabelCell<T = any> extends cocoa.NSTextFieldCell {}
  namespace classes {
    export interface NSTabViewLabelCell<T = any> extends cocoa.classes.NSTextFieldCell {
      alloc<R = NSTabViewLabelCell>(): R;
      new: <R = NSTabViewLabelCell>() => R;
    }
  }
}

declare const NSTabViewLabelCell: cocoa.classes.NSTabViewLabelCell;
