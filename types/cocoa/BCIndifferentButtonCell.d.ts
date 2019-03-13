/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCIndifferentButtonCell<T = any> extends NSButtonCell {}
  namespace classes {
    export interface BCIndifferentButtonCell<T = any> extends NSButtonCell {
      alloc<R = BCIndifferentButtonCell>(): R;
      new: <R = BCIndifferentButtonCell>() => R;
    }
  }
}

declare const BCIndifferentButtonCell: cocoa.classes.BCIndifferentButtonCell;
