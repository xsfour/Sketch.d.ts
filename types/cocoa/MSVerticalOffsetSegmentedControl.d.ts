/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSVerticalOffsetSegmentedControl<T0 = void, T1 = void, T2 = void> extends NSSegmentedControl {}
  namespace MSVerticalOffsetSegmentedControl {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSSegmentedControl {
      alloc<R = MSVerticalOffsetSegmentedControl>(): R;
      new: <R = MSVerticalOffsetSegmentedControl>() => R;
    }
  }
}

declare const MSVerticalOffsetSegmentedControl: cocoa.MSVerticalOffsetSegmentedControl.CLASS;
