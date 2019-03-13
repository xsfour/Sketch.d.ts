/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSMultipleSelectionBinder<T = any> extends NSSelectionBinder {}
  namespace classes {
    export interface NSMultipleSelectionBinder<T = any> extends NSSelectionBinder {
      alloc<R = NSMultipleSelectionBinder>(): R;
      new: <R = NSMultipleSelectionBinder>() => R;
    }
  }
}

declare const NSMultipleSelectionBinder: cocoa.classes.NSMultipleSelectionBinder;
