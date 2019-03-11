/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCIndifferentButtonCell<T = any> extends cocoa.NSButtonCell {}
  namespace classes {
    export interface BCIndifferentButtonCell<T = any> extends cocoa.classes.NSButtonCell {
      alloc<R = BCIndifferentButtonCell>(): R;
      new: <R = BCIndifferentButtonCell>() => R;
    }
  }
}

declare const BCIndifferentButtonCell: cocoa.classes.BCIndifferentButtonCell;
