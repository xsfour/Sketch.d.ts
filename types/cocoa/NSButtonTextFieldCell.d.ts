/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSButtonTextFieldCell<T = any> extends cocoa.NSTextFieldCell {}
  namespace classes {
    export interface NSButtonTextFieldCell<T = any> extends cocoa.classes.NSTextFieldCell {
      alloc<R = NSButtonTextFieldCell>(): R;
      new: <R = NSButtonTextFieldCell>() => R;
    }
  }
}

declare const NSButtonTextFieldCell: cocoa.classes.NSButtonTextFieldCell;
