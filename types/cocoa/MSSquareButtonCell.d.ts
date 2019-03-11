/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSquareButtonCell<T = any> extends cocoa.NSButtonCell {}
  namespace classes {
    export interface MSSquareButtonCell<T = any> extends cocoa.classes.NSButtonCell {
      alloc<R = MSSquareButtonCell>(): R;
      new: <R = MSSquareButtonCell>() => R;
    }
  }
}

declare const MSSquareButtonCell: cocoa.classes.MSSquareButtonCell;
