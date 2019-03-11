/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSMultipleSelectionBinder<T = any> extends cocoa.NSSelectionBinder {}
  namespace classes {
    export interface NSMultipleSelectionBinder<T = any> extends cocoa.classes.NSSelectionBinder {
      alloc<R = NSMultipleSelectionBinder>(): R;
      new: <R = NSMultipleSelectionBinder>() => R;
    }
  }
}

declare const NSMultipleSelectionBinder: cocoa.classes.NSMultipleSelectionBinder;
