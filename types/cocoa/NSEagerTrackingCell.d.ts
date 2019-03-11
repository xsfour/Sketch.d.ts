/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSEagerTrackingCell<T = any> extends cocoa.NSCell {}
  namespace classes {
    export interface NSEagerTrackingCell<T = any> extends cocoa.classes.NSCell {
      alloc<R = NSEagerTrackingCell>(): R;
      new: <R = NSEagerTrackingCell>() => R;
    }
  }
}

declare const NSEagerTrackingCell: cocoa.classes.NSEagerTrackingCell;
