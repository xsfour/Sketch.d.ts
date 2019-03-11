/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAltButtonCell<T = any> extends cocoa.MSHoverButtonCell {}
  namespace classes {
    export interface MSAltButtonCell<T = any> extends cocoa.classes.MSHoverButtonCell {
      alloc<R = MSAltButtonCell>(): R;
      new: <R = MSAltButtonCell>() => R;
    }
  }
}

declare const MSAltButtonCell: cocoa.classes.MSAltButtonCell;
