/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPlainButtonCell<T = any> extends MSHoverButtonCell {}
  namespace classes {
    export interface MSPlainButtonCell<T = any> extends MSHoverButtonCell {
      alloc<R = MSPlainButtonCell>(): R;
      new: <R = MSPlainButtonCell>() => R;
    }
  }
}

declare const MSPlainButtonCell: cocoa.classes.MSPlainButtonCell;
