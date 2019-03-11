/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCFilterTokenButtonCell<T = any> extends cocoa.NSButtonCell {
    cellSize<R = cocoa.CGSize>(): R;
    preferredTextSize<R = cocoa.CGSize>(): R;
  }
  namespace classes {
    export interface BCFilterTokenButtonCell<T = any> extends cocoa.classes.NSButtonCell {
      alloc<R = BCFilterTokenButtonCell>(): R;
      new: <R = BCFilterTokenButtonCell>() => R;
    }
  }
}

declare const BCFilterTokenButtonCell: cocoa.classes.BCFilterTokenButtonCell;
