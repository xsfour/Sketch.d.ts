/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSManageSharedObjectSheet<T = any> extends CHSheetController {
    segmentedAction<R = void, P0 = unknown>(_segmentedAction: P0): R;
    childControllerClasses<R = unknown>(): R;
    awakeFromNib<R = void>(): R;
    contentDrawViewController<R = NSViewController>(): R;
    setContentDrawViewController<R = void, P0 = NSViewController>(_v: P0): R;
    containerView<R = NSView>(): R;
    setContainerView<R = void, P0 = NSView>(_v: P0): R;
    tabSegmentControl<R = NSSegmentedControl>(): R;
    setTabSegmentControl<R = void, P0 = NSSegmentedControl>(_v: P0): R;
  }
  namespace classes {
    export interface MSManageSharedObjectSheet<T = any> extends CHSheetController {
      alloc<R = MSManageSharedObjectSheet>(): R;
      new: <R = MSManageSharedObjectSheet>() => R;
      setTabIndex<R = void, P0 = number>(_setTabIndex: P0): R;
      tabIndex<R = number>(): R;
    }
  }
}

declare const MSManageSharedObjectSheet: cocoa.classes.MSManageSharedObjectSheet;
