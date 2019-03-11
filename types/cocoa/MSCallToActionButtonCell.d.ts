/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCallToActionButtonCell<T = any> extends cocoa.MSHoverButtonCell {}
  namespace classes {
    export interface MSCallToActionButtonCell<T = any> extends cocoa.classes.MSHoverButtonCell {
      alloc<R = MSCallToActionButtonCell>(): R;
      new: <R = MSCallToActionButtonCell>() => R;
    }
  }
}

declare const MSCallToActionButtonCell: cocoa.classes.MSCallToActionButtonCell;
