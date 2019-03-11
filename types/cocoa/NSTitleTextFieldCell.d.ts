/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTitleTextFieldCell<T = any> extends cocoa.NSTextFieldCell {}
  namespace classes {
    export interface NSTitleTextFieldCell<T = any> extends cocoa.classes.NSTextFieldCell {
      alloc<R = NSTitleTextFieldCell>(): R;
      new: <R = NSTitleTextFieldCell>() => R;
    }
  }
}

declare const NSTitleTextFieldCell: cocoa.classes.NSTitleTextFieldCell;
