/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSVerticalOffsetSegmentedControl<T = any> extends cocoa.NSSegmentedControl {}
  namespace classes {
    export interface MSVerticalOffsetSegmentedControl<T = any> extends cocoa.classes.NSSegmentedControl {
      alloc<R = MSVerticalOffsetSegmentedControl>(): R;
      new: <R = MSVerticalOffsetSegmentedControl>() => R;
    }
  }
}

declare const MSVerticalOffsetSegmentedControl: cocoa.classes.MSVerticalOffsetSegmentedControl;
