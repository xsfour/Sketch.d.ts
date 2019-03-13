/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSButtonTextFieldCell<T = any> extends NSTextFieldCell {}
  namespace classes {
    export interface NSButtonTextFieldCell<T = any> extends NSTextFieldCell {
      alloc<R = NSButtonTextFieldCell>(): R;
      new: <R = NSButtonTextFieldCell>() => R;
    }
  }
}

declare const NSButtonTextFieldCell: cocoa.classes.NSButtonTextFieldCell;
