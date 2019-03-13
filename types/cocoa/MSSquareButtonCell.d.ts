/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSquareButtonCell<T = any> extends NSButtonCell {}
  namespace classes {
    export interface MSSquareButtonCell<T = any> extends NSButtonCell {
      alloc<R = MSSquareButtonCell>(): R;
      new: <R = MSSquareButtonCell>() => R;
    }
  }
}

declare const MSSquareButtonCell: cocoa.classes.MSSquareButtonCell;
