/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTitleTextFieldCell<T = any> extends NSTextFieldCell {}
  namespace classes {
    export interface NSTitleTextFieldCell<T = any> extends NSTextFieldCell {
      alloc<R = NSTitleTextFieldCell>(): R;
      new: <R = NSTitleTextFieldCell>() => R;
    }
  }
}

declare const NSTitleTextFieldCell: cocoa.classes.NSTitleTextFieldCell;
