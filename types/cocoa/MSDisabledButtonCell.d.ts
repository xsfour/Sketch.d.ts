/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSDisabledButtonCell<T = any> extends cocoa.NSButtonCell {}
  namespace classes {
    export interface MSDisabledButtonCell<T = any> extends cocoa.classes.NSButtonCell {
      alloc<R = MSDisabledButtonCell>(): R;
      new: <R = MSDisabledButtonCell>() => R;
    }
  }
}

declare const MSDisabledButtonCell: cocoa.classes.MSDisabledButtonCell;
