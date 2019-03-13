/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSDisabledButtonCell<T = any> extends NSButtonCell {}
  namespace classes {
    export interface MSDisabledButtonCell<T = any> extends NSButtonCell {
      alloc<R = MSDisabledButtonCell>(): R;
      new: <R = MSDisabledButtonCell>() => R;
    }
  }
}

declare const MSDisabledButtonCell: cocoa.classes.MSDisabledButtonCell;
