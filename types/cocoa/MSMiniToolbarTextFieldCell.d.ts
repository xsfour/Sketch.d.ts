/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSMiniToolbarTextFieldCell<T = any> extends NSTextFieldCell {}
  namespace classes {
    export interface MSMiniToolbarTextFieldCell<T = any> extends NSTextFieldCell {
      alloc<R = MSMiniToolbarTextFieldCell>(): R;
      new: <R = MSMiniToolbarTextFieldCell>() => R;
    }
  }
}

declare const MSMiniToolbarTextFieldCell: cocoa.classes.MSMiniToolbarTextFieldCell;
