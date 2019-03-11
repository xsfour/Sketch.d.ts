/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSRightOffsetHoverButtonCell<T = any> extends cocoa.MSHoverButtonCell {}
  namespace classes {
    export interface MSRightOffsetHoverButtonCell<T = any> extends cocoa.classes.MSHoverButtonCell {
      alloc<R = MSRightOffsetHoverButtonCell>(): R;
      new: <R = MSRightOffsetHoverButtonCell>() => R;
    }
  }
}

declare const MSRightOffsetHoverButtonCell: cocoa.classes.MSRightOffsetHoverButtonCell;
