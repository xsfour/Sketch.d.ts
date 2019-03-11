/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSegmentedControlBinder<T = any> extends cocoa.NSValueBinder {
    _updateContent<R = void>(): R;
  }
  namespace classes {
    export interface NSSegmentedControlBinder<T = any> extends cocoa.classes.NSValueBinder {
      alloc<R = NSSegmentedControlBinder>(): R;
      new: <R = NSSegmentedControlBinder>() => R;
    }
  }
}

declare const NSSegmentedControlBinder: cocoa.classes.NSSegmentedControlBinder;
