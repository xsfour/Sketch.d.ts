/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSegmentedControlBinder<T = any> extends NSValueBinder {
    _updateContent<R = void>(): R;
  }
  namespace classes {
    export interface NSSegmentedControlBinder<T = any> extends NSValueBinder {
      alloc<R = NSSegmentedControlBinder>(): R;
      new: <R = NSSegmentedControlBinder>() => R;
    }
  }
}

declare const NSSegmentedControlBinder: cocoa.classes.NSSegmentedControlBinder;
