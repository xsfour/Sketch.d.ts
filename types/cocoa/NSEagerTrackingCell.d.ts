/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSEagerTrackingCell<T = any> extends NSCell {}
  namespace classes {
    export interface NSEagerTrackingCell<T = any> extends NSCell {
      alloc<R = NSEagerTrackingCell>(): R;
      new: <R = NSEagerTrackingCell>() => R;
    }
  }
}

declare const NSEagerTrackingCell: cocoa.classes.NSEagerTrackingCell;
