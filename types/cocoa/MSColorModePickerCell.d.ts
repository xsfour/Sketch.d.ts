/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSColorModePickerCell<T = any> extends NSButtonCell {}
  namespace classes {
    export interface MSColorModePickerCell<T = any> extends NSButtonCell {
      alloc<R = MSColorModePickerCell>(): R;
      new: <R = MSColorModePickerCell>() => R;
    }
  }
}

declare const MSColorModePickerCell: cocoa.classes.MSColorModePickerCell;
