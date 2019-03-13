/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSToggleResizeButtonCell<T = any> extends NSButtonCell {}
  namespace classes {
    export interface MSToggleResizeButtonCell<T = any> extends NSButtonCell {
      alloc<R = MSToggleResizeButtonCell>(): R;
      new: <R = MSToggleResizeButtonCell>() => R;
    }
  }
}

declare const MSToggleResizeButtonCell: cocoa.classes.MSToggleResizeButtonCell;
