/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSmallButtonCell<T = any> extends cocoa.NSButtonCell {}
  namespace classes {
    export interface MSSmallButtonCell<T = any> extends cocoa.classes.NSButtonCell {
      alloc<R = MSSmallButtonCell>(): R;
      new: <R = MSSmallButtonCell>() => R;
    }
  }
}

declare const MSSmallButtonCell: cocoa.classes.MSSmallButtonCell;
