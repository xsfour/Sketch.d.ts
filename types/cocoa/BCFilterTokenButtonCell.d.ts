/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCFilterTokenButtonCell<T = any> extends NSButtonCell {
    cellSize<R = CGSize>(): R;
    preferredTextSize<R = CGSize>(): R;
  }
  namespace classes {
    export interface BCFilterTokenButtonCell<T = any> extends NSButtonCell {
      alloc<R = BCFilterTokenButtonCell>(): R;
      new: <R = BCFilterTokenButtonCell>() => R;
    }
  }
}

declare const BCFilterTokenButtonCell: cocoa.classes.BCFilterTokenButtonCell;
