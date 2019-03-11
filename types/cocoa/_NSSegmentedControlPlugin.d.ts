/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSSegmentedControlPlugin<T = any> extends cocoa._NSSelectionBinderPlugin {}
  namespace classes {
    export interface _NSSegmentedControlPlugin<T = any> extends cocoa.classes._NSSelectionBinderPlugin {
      alloc<R = _NSSegmentedControlPlugin>(): R;
      new: <R = _NSSegmentedControlPlugin>() => R;
    }
  }
}
