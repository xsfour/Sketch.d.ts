/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSToggleResizeButtonCell<T = any> extends cocoa.NSButtonCell {}
  namespace classes {
    export interface MSToggleResizeButtonCell<T = any> extends cocoa.classes.NSButtonCell {
      alloc<R = MSToggleResizeButtonCell>(): R;
      new: <R = MSToggleResizeButtonCell>() => R;
    }
  }
}

declare const MSToggleResizeButtonCell: cocoa.classes.MSToggleResizeButtonCell;
