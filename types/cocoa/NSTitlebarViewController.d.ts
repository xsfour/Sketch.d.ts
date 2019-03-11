/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTitlebarViewController<T = any> extends cocoa.NSViewController {
    _percentageToLeaveForFloatingTrailingWidgetOn_withFloatIndex<R = number, P0 = number, P1 = number>(__percentageToLeaveForFloatingTrailingWidgetOn: P0, _withFloatIndex: P1): R;
    _percentageToLeaveForFloatingTrailingWidgetOn<R = number, P0 = number>(__percentageToLeaveForFloatingTrailingWidgetOn: P0): R;
    _spaceToLeaveForFloatingTrailingWidgetOn<R = number, P0 = number>(__spaceToLeaveForFloatingTrailingWidgetOn: P0): R;
    spaceToLeaveForFloatingTrailingWidgetOnAccessory<R = number, P0 = unknown>(_spaceToLeaveForFloatingTrailingWidgetOnAccessory: P0): R;
    didChangeChildViewController<R = void, P0 = unknown>(_didChangeChildViewController: P0): R;
    associatedThemeFrame<R = cocoa.NSThemeFrame>(): R;
    setAssociatedThemeFrame<R = void, P0 = cocoa.NSThemeFrame>(_v: P0): R;
    spaceToLeaveForFloatingTrailingWidgetOnToolbar<R = number>(): R;
    floatingTrailingWidgetWidth<R = number>(): R;
    revealAmount<R = number>(): R;
    setRevealAmount<R = void, P0 = number>(_v: P0): R;
    inFullScreen<R = boolean>(): R;
    setInFullScreen<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace classes {
    export interface NSTitlebarViewController<T = any> extends cocoa.classes.NSViewController {
      alloc<R = NSTitlebarViewController>(): R;
      new: <R = NSTitlebarViewController>() => R;
    }
  }
}

declare const NSTitlebarViewController: cocoa.classes.NSTitlebarViewController;
